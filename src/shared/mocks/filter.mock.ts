import { IFilter } from 'shared/types';

import { filtersShortMock } from './filtersShort.mock';

export const filterMock: IFilter = {
  id: 'filter1',
  name: 'фильтр 1',
  variants: filtersShortMock[0].variants,
  price: ['50000', '150000'],
  manufactureYear: ['1996', '2023'],
  mileage: ['20000', '150000'],
  engineType: 'petrol',
  city: 'Ростов-на-Дону',
  region: ['Ростовская обл.'],
};
