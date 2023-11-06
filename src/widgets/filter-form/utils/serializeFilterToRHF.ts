import { filterConfigMock } from 'shared/mocks/filterConfig.mock';
import { IFilter } from 'shared/types';

import { ISerializedFilter, ISerializedVariants } from '../model';

export function serializeFilterToRHF(filter: IFilter) {
  const config = filterConfigMock;

  const variants: ISerializedVariants = {};
  filter.variants.forEach((variant) => {
    if (variant.model === 'all') {
      variants[variant.brand] = config.variants[variant.brand];
    } else {
      variants[variant.brand] = variant.model.split(',');
    }
  });

  const serialized: ISerializedFilter = {
    ...filter,
    variants,
  };

  return serialized;
}
