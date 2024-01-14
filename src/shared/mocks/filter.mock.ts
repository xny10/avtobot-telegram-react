import { IFilter } from 'shared/types';

export const filterMock: IFilter = {
  id: 'filter1',
  name: 'фильтр 1',
  cars: [
    {
      id: 215,
      name: 'BMW',
      models: [{ name: 'bm12' }],
    },
    {
      id: 214,
      name: 'AC',
      models: [{ name: '378 GT ZAGATO' }],
    },
    {
      id: 213,
      name: 'Alfa Romeo',
      models: [{ name: 'Alfa12' }, { name: 'MOP' }],
    },
  ],
  isActive: true,
  price: ['200000', '1200000'],
  manufactureYear: ['1996', '2023'],
  createdAt: '2024-01-10 17:41:06.675979 +00:00',
  mileage: ['20000', '150000'],
  // engineVolume: ['', '3.4'],
  // enginePower: ['300', '1300'],
  engineType: 'petrol',
  city: ['Москва'],
  region: ['Ростовская обл.'],
  searchType: 'region',
};

export const filtersMock: IFilter[] = [
  { ...filterMock, id: 'f1' },
  { ...filterMock, id: 'f2' },
  { ...filterMock, id: 'f3' },
  { ...filterMock, id: 'f4' },
];
