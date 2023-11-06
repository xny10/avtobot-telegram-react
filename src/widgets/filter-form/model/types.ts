import { IFilter } from 'shared/types';

export type ISerializedVariants = {
  [brand: string]: {
    [model: string]: boolean;
  };
};

export type ISerializedFilter = Omit<IFilter, 'variants'> & {
  variants: ISerializedVariants;
};
