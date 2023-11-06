import { IFilterShort } from 'shared/types';

export const filtersShortMock: IFilterShort[] = [
  {
    id: 'qwerty',
    name: 'фильтр 1',
    variants: [
      {
        model: '14',
        brand: 'BMW',
      },
      {
        model: 'all',
        brand: 'ВАЗ',
      },
      {
        model: '12',
        brand: 'Alfa Romeo',
      },
    ],
    isActive: true,
  },
  {
    id: 'qwerty2',
    name: 'фильтр бэхи',
    variants: [
      {
        model: 'all',
        brand: 'BMW',
      },
    ],
    isActive: false,
  },
  {
    id: 'qwerty3',
    name: 'фильтр крутые',
    variants: [
      {
        model: '2',
        brand: 'bugatti',
      },
    ],
    isActive: false,
  },
];
