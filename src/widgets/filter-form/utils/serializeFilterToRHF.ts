import { filterConfigMock } from 'shared/mocks/filterConfig.mock';
import { IFilter } from 'shared/types';

import { ISerializedFilter, ISerializedVariants } from '../model';

export function serializeFilterToRHF(filter: IFilter) {
  const config = filterConfigMock;

  const variants: ISerializedVariants = {};
  Object.entries(config.variants).forEach(([brand, models]) => {
    variants[brand] = {};
    models.forEach((model) => {
      const filterVariant = filter.variants.find((variant) => variant.brand === brand)?.models;
      if (!filterVariant) {
        variants[brand][model] = false;
      } else if (filterVariant.length === 0) {
        variants[brand][model] = true;
      } else {
        variants[brand][model] = filter.variants.find((variant) => variant.models.includes(model)) ? true : false;
      }
    });
  });

  const serialized: ISerializedFilter = {
    ...filter,
    variants,
  };

  return serialized;
}
