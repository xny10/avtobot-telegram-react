export type IVariantShort = {
  model: string;
  make: string;
};

export type IFilterShort = {
  id: string;
  name: string;
  variants: IVariantShort[];
  isActive: boolean;
};

export type IFilterEngine = 'petrol' | 'diesel' | 'electric' | 'gas' | 'hybrid' | '';

export type IFilter = {
  id: string;
  name: string;
  variants: IVariantShort[];
  price: [string, string];
  manufactureYear: [string, string];
  mileage: [string, string];
  engineType: IFilterEngine;
  // either one or another
  region?: string[];
  city?: string;
};
