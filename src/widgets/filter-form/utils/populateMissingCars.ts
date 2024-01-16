import { produce } from 'immer';
import { ICar, IFilter } from 'shared/types';

export function populateMissingCars(filter: IFilter, cars: ICar[]) {
  const existingCarsBrands = new Set(filter.carChoices.map((car) => car.name));

  return produce(filter, (draft) => {
    cars.forEach((car) => {
      if (!existingCarsBrands.has(car.name)) {
        draft.carChoices.push({ ...car, models: [] });
      }
    });
  });
}
