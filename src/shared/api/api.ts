import { FilterDto } from 'shared/dto/Filter.dto';
import { ICar, ICity, IFilter, IRegion } from 'shared/types';

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
  try {
    const res = await api.get<ICar[]>('Dictionaries/manufacturers');
    return res.data;
  } catch (e) {
    console.error('error', e);
  }
}

type FetchFiltersPayload = {
  userId: number;
};

export async function fetchFilters(payload: FetchFiltersPayload) {
  const res = await api.post<IFilter[]>('Filter/getAllByUserId', payload);
  return res.data;
}

export async function createFilter(dto: FilterDto) {
  const res = await api.post<IFilter>('Filter/add', dto);
  return res.data;
}

export async function updateFilter(dto: FilterDto) {
  const res = await api.post<IFilter>('Filter/edit', dto);
  return res.data;
}

export async function deleteFilter(filterId: number) {
  const res = await api.post<boolean>('Filter/edit', {
    id: filterId,
  });
  return res.data;
}
