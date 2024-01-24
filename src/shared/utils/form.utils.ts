import {
  ICarExpanded,
  ICarsSerialized,
  IFilter,
  IFilterCreate,
  IFilterCreateSerialized,
  IFilterSerialized,
  IRangeTuple,
} from 'shared/types';

export function serializeCars(cars: ICarExpanded[]): ICarsSerialized {
  const carsSerialized: ICarsSerialized = {};

  cars.forEach((car) => {
    carsSerialized[car.name] = {};
    car.models.forEach((make) => {
      carsSerialized[car.name][make.name] = false;
    });
  });

  return carsSerialized;
}

export function serializeTuple(tuple: IRangeTuple): [string, string] {
  return tuple.map((item) => {
    if (item === null) return '';
    return item.toString();
  }) as [string, string];
}

export function deserializeTuple(tuple: [string, string]): IRangeTuple {
  return [tuple[0] === '' ? null : Number.parseInt(tuple[0]), tuple[1] === '' ? null : Number.parseInt(tuple[1])];
}

export function serializeFilter(filter: IFilter, cars: ICarExpanded[]): IFilterSerialized {
  const carsSerialized = serializeCars(cars);

  filter.carChoices.forEach((car) => {
    car.models.forEach((make) => {
      carsSerialized[car.name][make.name] = true;
    });
  });

  const filterCopy = structuredClone(filter);

  const filterSerialized: IFilterSerialized = {
    ...filterCopy,
    carChoices: carsSerialized,
    price: serializeTuple(filterCopy.price),
    manufactureYear: serializeTuple(filterCopy.manufactureYear),
    mileage: serializeTuple(filterCopy.mileage),
  };

  return filterSerialized;
}

export function serializeFilterCreate(filter: IFilterCreate, cars: ICarExpanded[]): IFilterCreateSerialized {
  const carsSerialized = serializeCars(cars);

  filter.carChoices.forEach((car) => {
    car.models.forEach((make) => {
      carsSerialized[car.name][make.name] = true;
    });
  });

  const filterCopy = structuredClone(filter);

  const filterSerialized: IFilterCreateSerialized = {
    ...filterCopy,
    carChoices: carsSerialized,
    price: serializeTuple(filterCopy.price),
    manufactureYear: serializeTuple(filterCopy.manufactureYear),
    mileage: serializeTuple(filterCopy.mileage),
  };

  return filterSerialized;
}
