import { filterConfigMock } from 'shared/mocks/filterConfig.mock';
import { IFilter } from 'shared/types';

import { ISerializedFilter, ISerializedVariants } from '../model';

export function serializeFilterToRHF(filter: IFilter) {
  const config = filterConfigMock;

  const variants: ISerializedVariants = {};
  Object.entries(config.variants).forEach(([brand, models]) => {
    variants[brand] = {};
    models.forEach((model) => {
      const filterVariant = filter.variants.find((variant) => variant.brand === brand)?.model;
      if (filterVariant === 'all') {
        variants[brand][model] = true;
      } else {
        variants[brand][model] = filter.variants.find((variant) => variant.model.split(',').includes(model))
          ? true
          : false;
      }
    });
  });

  const serialized: ISerializedFilter = {
    ...filter,
    variants,
  };

  return serialized;
}
