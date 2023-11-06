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
        model: '12,14',
      },
    ],
    isActive: true,
    manufactureYear: ['1996', '2023'],
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
    manufactureYear: ['2000', '2005'],
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
    manufactureYear: ['1990', '1995'],
  },
];
