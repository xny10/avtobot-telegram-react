import { produce } from 'immer';
import { ICar, IFilter } from 'shared/types';

export function populateMissingCars(filter: IFilter, cars: ICar[]) {
  const existingCarsBrands = new Set(filter.cars.map((car) => car.brand));

  return produce(filter, (draft) => {
    cars.forEach((car) => {
      if (!existingCarsBrands.has(car.brand)) {
        draft.cars.push({ brand: car.brand, makes: [] });
      }
    });
  });
}
