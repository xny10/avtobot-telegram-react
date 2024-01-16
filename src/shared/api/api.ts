import { ICity, IRegion } from 'shared/types';

import { api } from './queryClient';

export async function fetchCities() {
  try {
    const res = await api.get<ICity[]>('Dictionaries/cities');
    return res.data;
  } catch (e) {
    console.error('error', e);
  }
}

export async function fetchRegions() {
  try {
    const res = await api.get<IRegion[]>('Dictionaries/regions');
    return res.data;
  } catch (e) {
    console.error('error', e);
  }
}