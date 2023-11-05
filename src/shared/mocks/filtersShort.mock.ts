import { IFilterShort } from 'shared/types';

export const filtersShortMock: IFilterShort[] = [
  {
    id: 'qwerty',
    name: 'фильтр 1',
    variants: [
      {
        make: '14',
        model: 'BMW',
      },
      {
        make: 'all',
        model: 'ВАЗ',
      },
      {
        make: '12',
        model: 'Alfa Romeo',
      },
    ],
  },
  {
    id: 'qwerty2',
    name: 'фильтр бэхи',
    variants: [
      {
        make: 'all',
        model: 'BMW',
      },
    ],
  },
  {
    id: 'qwerty3',
    name: 'фильтр крутые',
    variants: [
      {
        make: '2',
        model: 'bugatti',
      },
    ],
  },
];
