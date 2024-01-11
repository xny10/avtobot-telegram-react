export type IVariantShort = {
  brand: string;
  models: string[];
};

export type IFilterShort = {
  id: string;
  name: string;
  variants: IVariantShort[];
  isActive: boolean;
  manufactureYear: [string, string];
};

export type IFilterEngine = 'petrol' | 'diesel' | 'electric' | 'gas' | 'hybrid' | '';

export type ISearchType = 'region' | 'city';

export type IFilter = {
  id: string;
  name: string;
  variants: IVariantShort[];
  price: [string, string];
  manufactureYear: [string, string];
  mileage: [string, string];
  engineType: IFilterEngine;
  engineVolume: [string, string];
  enginePower: [string, string];
  region: string[];
  city: string[];
  searchType: ISearchType;
};
