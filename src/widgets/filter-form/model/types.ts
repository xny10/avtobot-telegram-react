import { IFilter } from 'shared/types';

export type ISerializedFilter = Omit<IFilter, 'variants'> & {
  variants: {
    brand: string;
    model: string[];
  }[];
};
