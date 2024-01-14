import { IFilter } from 'shared/types';

export const filterMock: IFilter = {
  id: 'filter1',
  name: 'фильтр 1',
  cars: [
    {
      id: 215,
      name: 'ACURA',
      models: [{ id: 1569, name: 'EL', manufacturerId: 215 }],
    },
    {
      id: 216,
      name: 'ALFA-ROMEO',
      models: [
        {
          id: 1584,
          name: '6C',
          manufacturerId: 216,
        },
        {
          id: 1585,
          name: 'Spider',
          manufacturerId: 216,
        },
        {
          id: 1586,
          name: '8C',
          manufacturerId: 216,
        },
      ],
    },
  ],
  isActive: true,
  price: [200000, 1200000],
  manufactureYear: [1996, 2023],
  createdAt: '2024-01-10 17:41:06.675979 +00:00',
  mileage: [null, 150000],
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
