import { ICarsSerialized } from 'shared/types';

export function isBrandMakesSelected(carMakes: ICarsSerialized[string]) {
  return Object.values(carMakes).every(Boolean);
}

export function areAllCarsSelected(cars: ICarsSerialized) {
  return Object.values(cars).every((carMakes) => isBrandMakesSelected(carMakes));
}

export function areNoneCarsSelected(cars: ICarsSerialized) {
  return Object.values(cars).every((carMakes) => !isBrandMakesSelected(carMakes));
}

export function setAllCarsSelection(cars: ICarsSerialized, selected: boolean) {
  const copy = JSON.parse(JSON.stringify(cars));
  Object.keys(copy).forEach((brandName) => {
    Object.keys(copy[brandName]).forEach((makeName) => {
      copy[brandName][makeName] = selected;
    });
  });
  return copy;
}
