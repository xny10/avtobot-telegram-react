import { ICarsSerialized, IFilterCreate } from 'shared/types';

function allModelsSelected(models: ICarsSerialized[string]) {
  return Object.values(models).every(Boolean);
}

function allModelsDeselected(models: ICarsSerialized[string]) {
  return Object.values(models).every((selected) => !selected);
}

export function allCarsSelected(cars: ICarsSerialized) {
  return Object.values(cars).every((carMakes) => allModelsSelected(carMakes));
}

export function allCarsDeselected(cars: ICarsSerialized) {
  return Object.values(cars).every((carMakes) => allModelsDeselected(carMakes));
}

export function createCarsWithSelection(cars: ICarsSerialized, selected: boolean) {
  const clone = structuredClone(cars);
  Object.keys(clone).forEach((brandName) => {
    Object.keys(clone[brandName]).forEach((makeName) => {
      clone[brandName][makeName] = selected;
    });
  });
  return clone;
}

export function createEmptyFilter(userId: number): IFilterCreate {
  return {
    userId,
    name: '',
    carChoices: [],
    cityIds: [],
    regionIds: [],
    searchType: 'city',
    engineType: 'petrol',
    isActive: true,
    manufactureYear: [null, null],
    mileage: [null, null],
    price: [null, null],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
