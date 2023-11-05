import { IFilter } from 'shared/types';

import { filtersShortMock } from './filtersShort.mock';

export const filterMock: IFilter = {
  id: 'filter1',
  name: 'фильтр 1',
  variants: filtersShortMock[0].variants,
  price: [200000, 1250000],
  manufactureYear: [1996, 2023],
  mileage: [12312, 124344],
  engineType: 'petrol',
  city: 'Rostov-on-Don',
};
