import { ICar, ICarsSerialized, IFilter, IFilterSerialized, IRangeTuple } from 'shared/types';

function serializeCars(cars: ICar[]): ICarsSerialized {
  const carsSerialized: ICarsSerialized = {};

  cars.forEach((car) => {
    carsSerialized[car.name] = {};
    car.models.forEach((make) => {
      carsSerialized[car.name][make.name] = false;
    });
  });

  return carsSerialized;
}

function deserializeCars(cars: ICarsSerialized): ICar[] {
  // TODO: десериализация
  return <ICar[]><unknown>null
}

function serializeTuple(tuple: IRangeTuple): [string, string] {
  return tuple.map((item) => {
    if (item === null) return '';
    return item.toString();
  }) as [string, string];
}

function deserializeTuple(tuple: [string, string]): IRangeTuple {
  return [
    (tuple[0] === '' ? null : Number.parseInt(tuple[0])),
    (tuple[1] === '' ? null : Number.parseInt(tuple[1])),
  ]
}

export function serializeFilter(filter: IFilter, cars: ICar[]): IFilterSerialized {
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

export function deserializeFilter(filterSerialized: IFilterSerialized): IFilter {
  console.log('serializedFilter', filterSerialized)

  const filterCopy = structuredClone(filterSerialized)

  // TODO: привести не к filter, а к filterDto
  const filter: IFilter = {
    ...filterSerialized,
    carChoices: deserializeCars(filterCopy.carChoices),
    price: deserializeTuple(filterCopy.price),
    manufactureYear: deserializeTuple(filterCopy.manufactureYear),
    mileage: deserializeTuple(filterCopy.mileage),
  }

  console.log('deserializedFilter', filter)

  return filter
}