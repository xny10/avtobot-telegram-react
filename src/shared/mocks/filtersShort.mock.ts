import { IFilterShort } from 'shared/types';

export const filtersShortMock: IFilterShort[] = [
  {
    id: 'qwerty',
    name: 'фильтр 1',
    variants: [
      {
        brand: 'BMW',
        model: '12',
      },
      {
        brand: 'ВАЗ',
        model: 'all',
      },
      {
        brand: 'Alfa Romeo',
        model: '14',
      },
    ],
    isActive: true,
  },
  {
    id: 'qwerty2',
    name: 'фильтр бэхи',
    variants: [
      {
        brand: 'BMW',
        model: 'all',
      },
    ],
    isActive: false,
  },
  {
    id: 'qwerty3',
    name: 'фильтр крутые',
    variants: [
      {
        brand: 'bugatti',
        model: '2',
      },
    ],
    isActive: false,
  },
];
