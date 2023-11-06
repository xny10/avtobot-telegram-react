import { IFilter } from 'shared/types';

export type ISerializedVariants = {
  [brand: string]: string[];
};

export type ISerializedFilter = Omit<IFilter, 'variants'> & {
  variants: ISerializedVariants;
};
