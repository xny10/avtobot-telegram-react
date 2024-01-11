import { IFilter } from 'shared/types';

import { filtersShortMock } from './filtersShort.mock';

export const filterMock: IFilter = {
  id: 'filter1',
  name: 'фильтр 1',
  variants: filtersShortMock[0].variants,
  price: ['200000', '1200000'],
  manufactureYear: ['1996', '2023'],
  mileage: ['20000', '150000'],
  engineVolume: ['', '3.4'],
  enginePower: ['300', '1300'],
  engineType: 'petrol',
  city: ['Москва'],
  region: ['Ростовская обл.'],
  searchType: 'region',
};
