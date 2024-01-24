import { CreateFilterDto } from 'shared/dto/CreateFilter.dto';
import { FilterDto } from 'shared/dto/Filter.dto';
import { ICarExpanded, ICity, IFilter, IRegion } from 'shared/types';

import { api } from './queryClient';

export async function fetchCities() {
  const res = await api.get<ICity[]>('Dictionaries/cities');
  return res.data;
}

export async function fetchRegions() {
  const res = await api.get<IRegion[]>('Dictionaries/regions');
  return res.data;
}

export async function fetchCars() {
  const res = await api.get<ICarExpanded[]>('Dictionaries/manufacturers');
  return res.data;
}

type FetchFiltersPayload = {
  userId: number;
};

export async function fetchFilter(payload: FetchFiltersPayload) {
  const res = await api.post<IFilter[]>('Filter/getAllByUserId', payload);
  return res.data;
}

export async function fetchFilterById(filterId: number) {
  const res = await api.post<IFilter>('Filter/get', {
    id: filterId,
  });
  return res.data;
}

export async function createFilter(dto: CreateFilterDto) {
  const res = await api.post<IFilter>('Filter/add', dto);
  return res.data;
}

export async function updateFilter(dto: FilterDto) {
  const res = await api.post<IFilter>('Filter/edit', dto);
  return res.data;
}

export async function deleteFilter(filterId: number) {
  const res = await api.post<boolean>('Filter/delete', {
    id: filterId,
  });
  return res.data;
}
