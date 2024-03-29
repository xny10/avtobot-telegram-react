import { IFilter } from 'shared/types';

export const filterMock: IFilter = {
  id: 12,
  userId: 0,
  name: 'фильтр 1',
  carChoices: [
    {
      id: 215,
      name: 'ACURA',
      models: [{ id: 1569, name: 'EL' }],
    },
    {
      id: 216,
      name: 'ALFA-ROMEO',
      models: [
        {
          id: 1584,
          name: '6C',
        },
        {
          id: 1585,
          name: 'Spider',
        },
        {
          id: 1586,
          name: '8C',
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
  cityIds: [701, 702, 705, 708],
  regionIds: [104, 105, 106, 109, 112],
  searchType: 'region',
};

export const filtersMock: IFilter[] = [
  { ...filterMock, id: 12 },
  { ...filterMock, id: 124 },
  { ...filterMock, id: 125 },
  { ...filterMock, id: 126 },
];
