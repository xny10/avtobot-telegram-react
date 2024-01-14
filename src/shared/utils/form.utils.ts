import { produce } from 'immer';
import { ICar, ICarsSerialized, IFilter, IFilterSerialized } from 'shared/types';

export function serializeCars(cars: ICar[]): ICarsSerialized {
  const carsSerialized: ICarsSerialized = {};

  cars.forEach((car) => {
    carsSerialized[car.name] = {};
    car.models.forEach((make) => {
      carsSerialized[car.name][make.name] = false;
    });
  });

  return carsSerialized;
}

export function serializeFilter(filter: IFilter, cars: ICar[]): IFilterSerialized {
  const carsSerialized = serializeCars(cars);

  filter.cars.forEach((car) => {
    car.models.forEach((make) => {
      carsSerialized[car.name][make.name] = true;
    });
  });

  const filterSerialized = produce<IFilter, IFilterSerialized>(filter, (draft) => {
    draft.cars = carsSerialized;
  });

  // TODO что-то не так с выведением типов у produce
  return filterSerialized as unknown as IFilterSerialized;
}
