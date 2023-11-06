import { filterConfigMock } from 'shared/mocks/filterConfig.mock';
import { IFilter } from 'shared/types';

import { ISerializedFilter } from '../model';

export function serializeFilterToRHF(filter: IFilter) {
  const config = filterConfigMock;

  const serialized: ISerializedFilter = {
    ...filter,
    variants: filter.variants.map((variant) => {
      if (variant.model === 'all') {
        return {
          brand: variant.brand,
          model: config.variants[variant.brand],
        };
      }
      return {
        brand: variant.brand,
        model: [variant.model],
      };
    }),
  };

  return serialized;
}
