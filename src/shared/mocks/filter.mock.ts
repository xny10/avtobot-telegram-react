import { IFilter } from 'shared/types';

export const filterMock: IFilter = {
  id: 'filter1',
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

export const filtersMock: IFilter[] = [{ ...filterMock }, { ...filterMock }, { ...filterMock }, { ...filterMock }];
