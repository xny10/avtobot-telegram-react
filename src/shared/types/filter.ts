export type IFilterEngine = 'petrol' | 'diesel' | 'electric' | 'gas' | 'hybrid' | '';

export type ISearchType = 'region' | 'city';

export type IModelExpanded = {
  id: number;
  name: string;
  manufacturerId: number;
};

export type ICarExpanded = {
  id: number;
  name: string;
  models: IModelExpanded[];
};

export type IModel = {
  id: number;
  name: string;
};

export type ICar = {
  id: number;
  name: string;
  models: IModel[];
};

export type IRangeTuple = [number | null, number | null];

export type IFilter = {
  id: number;
  userId: number;
  name: string;
  isActive: boolean;
  carChoices: ICar[];
  price: IRangeTuple;
  manufactureYear: IRangeTuple;
  mileage: IRangeTuple;
  engineType: IFilterEngine;
  // TODO: пока выключаем эту шнягу
  // engineVolume: IRangeTuple;
  // enginePower: IRangeTuple;
  regionIds: number[];
  cityIds: number[];
  searchType: ISearchType;
  // example: 2024-01-15T12:23:11.83061Z
  createdAt: string;
  updatedAt: string;
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

export type IFilterSerialized = Omit<IFilter, 'carChoices' | 'price' | 'manufactureYear' | 'mileage'> & {
  carChoices: ICarsSerialized;
  price: [string, string];
  manufactureYear: [string, string];
  mileage: [string, string];
};
