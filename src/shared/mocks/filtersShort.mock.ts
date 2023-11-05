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
    isActive: true,
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
    isActive: false,
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
    isActive: false,
  },
];
