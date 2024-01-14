export type IFilterEngine = 'petrol' | 'diesel' | 'electric' | 'gas' | 'hybrid' | '';

export type ISearchType = 'region' | 'city';

export type ICar = {
  id: number;
  brand: string;
  makes: { name: string }[];
};

export type IFilter = {
  id: string;
  name: string;
  isActive: boolean;
  // example: 2024-01-10 17:41:06.675979 +00:00
  createdAt: string;
  cars: ICar[];
  price: [string, string];
  manufactureYear: [string, string];
  mileage: [string, string];
  engineType: IFilterEngine;
  // TODO: пока выключаем эту шнягу
  // engineVolume: [string, string];
  // enginePower: [string, string];
  // TODO: на самом деле это int айдишники городов и регионов
  region: string[];
  city: string[];
  searchType: ISearchType;
};

export type ICarsSerialized = {
  [brand: string]: {
    [model: string]: boolean;
  };
};

export type IFilterSerialized = Omit<IFilter, 'cars'> & {
  cars: ICarsSerialized;
};
