export type IVariantShort = {
  id: string;
  model: string;
  make: string;
};

export type IFilterShort = {
  id: string;
  name: string;
  variants: IVariantShort[];
};
