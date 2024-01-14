export type IFilterEngine = 'petrol' | 'diesel' | 'electric' | 'gas' | 'hybrid' | '';

export type ISearchType = 'region' | 'city';

export type IModel = {
  id: number;
  name: string;
  // TODO: Вообще эту штуку можно удалить и нужно
  manufacturerId: number;
};

export type ICar = {
  id: number;
  name: string;
  models: IModel[];
};

export type IRangeTuple = [number | null, number | null];

export type IFilter = {
  id: number;
  name: string;
  isActive: boolean;
  // example: 2024-01-10 17:41:06.675979 +00:00
  createdAt: string;
  cars: ICar[];
  price: IRangeTuple;
  manufactureYear: IRangeTuple;
  mileage: IRangeTuple;
  engineType: IFilterEngine;
  // TODO: пока выключаем эту шнягу
  // engineVolume: IRangeTuple;
  // enginePower: IRangeTuple;
  // TODO: на самом деле это int айдишники городов и регионов
  region: string[];
  city: string[];
  searchType: ISearchType;
};

export type ICarChoice = {
  ManufacturerID: number;
  ModelIds: number[];
};

export type FilterDto = {
  Id: number;
  UserId: number;
  Name: string;
  IsActive: boolean;
  CarChoices: ICarChoice[];
  Price: IRangeTuple;
  ManufactureYear: IRangeTuple;
  Mileage: IRangeTuple;
  EngineType: IFilterEngine;
  SearchType: ISearchType;
  // TODO: пока выключаем эту шнягу
  // engineVolume: IRangeTuple;
  // enginePower: IRangeTuple;
  RegionIds: number[];
  CityIds: number[];
};

export type ICarsSerialized = {
  [brand: string]: {
    [model: string]: boolean;
  };
};

export type IFilterSerialized = Omit<IFilter, 'cars' | 'price' | 'manufactureYear' | 'mileage'> & {
  cars: ICarsSerialized;
  price: [string, string];
  manufactureYear: [string, string];
  mileage: [string, string];
};
