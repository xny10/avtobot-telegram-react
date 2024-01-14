import { ICar, ICarsSerialized, IFilter, IFilterSerialized, IRangeTuple } from 'shared/types';

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

  const filterCopy = structuredClone(filter);

  const filterSerialized: IFilterSerialized = {
    ...filterCopy,
    cars: carsSerialized,
    price: serializeTuple(filterCopy.price),
    manufactureYear: serializeTuple(filterCopy.manufactureYear),
    mileage: serializeTuple(filterCopy.mileage),
  };

  return filterSerialized;
}

function serializeTuple(tuple: IRangeTuple): [string, string] {
  if (tuple.length !== 2) throw new Error('tuple have length other than 2');
  return tuple.map((item) => {
    if (item === null) return '';
    return item.toString();
  }) as [string, string];
}
