import { IFilter } from 'shared/types';

export const filterMock: IFilter = {
  id: 123,
  userId: 100,
  name: 'фильтр 1',
  carChoices: [
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
  createdAt: '2024-01-15T12:23:11.83061Z',
  updatedAt: '2024-01-15T12:23:11.83061Z',
  mileage: [null, 150000],
  // engineVolume: ['', '3.4'],
  // enginePower: ['300', '1300'],
  engineType: 'petrol',
  city: [701, 702, 705, 708],
  region: [104, 105, 106, 109, 112],
  searchType: 'region',
};

export const filtersMock: IFilter[] = [
  { ...filterMock, id: 123 },
  { ...filterMock, id: 124 },
  { ...filterMock, id: 125 },
  { ...filterMock, id: 126 },
];
