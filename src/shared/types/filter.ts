export type IVariantShort = {
  model: string;
  make: string;
};

export type IFilterShort = {
  id: string;
  name: string;
  variants: IVariantShort[];
};
