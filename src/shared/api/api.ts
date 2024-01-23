import { UpdateFilterDto } from 'shared/dto/UpdateFilter.dto';
import { ICar, ICity, IRegion } from 'shared/types';

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
  const res = await api.post<ICar[]>('Filter/getAllByUserId', payload);
  return res.data;
}
