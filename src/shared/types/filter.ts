export type IVariantShort = {
  model: string;
  make: string;
};

export type IFilterShort = {
  id: string;
  name: string;
  variants: IVariantShort[];
};

type IFilterEngine = 'petrol' | 'diesel' | 'electric' | 'gas' | 'hybrid';

export type IFilter = {
  id: string;
  name: string;
  variants: IVariantShort[];
  price: [number, number];
  manufactureYear: [number, number];
  mileage: [number, number];
  engineType: IFilterEngine;
  // either one or another
  region?: string[];
  city?: string;
};
