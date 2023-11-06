import { IFilterShort } from 'shared/types';

export const filtersShortMock: IFilterShort[] = [
  {
    id: 'qwerty',
    name: 'фильтр 1',
    variants: [
      {
        brand: 'BMW',
        models: ['12'],
      },
      {
        brand: 'ВАЗ',
        models: [],
      },
      {
        brand: 'Alfa Romeo',
        models: ['12', '14'],
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
        models: [],
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
        models: ['2'],
      },
    ],
    isActive: false,
    manufactureYear: ['1990', '1995'],
  },
];
