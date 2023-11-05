import { IFilterShort } from 'shared/types';

export const filtersShortMock: IFilterShort[] = [
  {
    id: 'qwerty',
    name: 'фильтр 1',
    variants: [
      {
        id: 'var1',
        make: '14',
        model: 'BMW',
      },
      {
        id: 'var2',
        make: 'all',
        model: 'ВАЗ',
      },
      {
        id: 'var3',
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
        id: 'var1',
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
        id: 'var1',
        make: '2',
        model: 'bugatti',
      },
    ],
  },
];
