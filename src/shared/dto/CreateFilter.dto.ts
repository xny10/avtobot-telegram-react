import {
  ICar,
  ICarExpanded,
  ICarsSerialized,
  IFilterCreateSerialized,
  IFilterEngine,
  IFilterSerialized,
  IRangeTuple,
  ISearchType,
} from 'shared/types';
import { allCarsDeselected, createCarsWithSelection } from 'shared/utils/filter.utils';
import { deserializeTuple } from 'shared/utils/form.utils';

export class CreateFilterDto {
  userId: number;
  name: string;
  isActive: boolean;
  carChoices: ICar[];
  price: IRangeTuple;
  manufactureYear: IRangeTuple;
  mileage: IRangeTuple;
  engineType: IFilterEngine;
  // TODO: пока выключаем эту шнягу
  // engineVolume: IRangeTuple
  // enginePower: IRangeTuple
  regionIds: number[];
  cityIds: number[];
  searchType: ISearchType;
  createdAt: string;
  updatedAt: string;

  constructor(filter: IFilterCreateSerialized, cars: ICarExpanded[]) {
    const clone = structuredClone(filter);
    this.userId = clone.userId;
    this.name = clone.name;
    this.isActive = clone.isActive;
    if (allCarsDeselected(filter.carChoices)) {
      this.carChoices = this.deseralizeCars(createCarsWithSelection(clone.carChoices, true), cars);
    } else {
      this.carChoices = this.deseralizeCars(clone.carChoices, cars);
    }
    this.price = deserializeTuple(clone.price);
    this.manufactureYear = deserializeTuple(clone.manufactureYear);
    this.mileage = deserializeTuple(clone.mileage);
    this.engineType = clone.engineType;
    this.regionIds = clone.regionIds;
    this.cityIds = clone.cityIds;
    this.searchType = clone.searchType;
    this.createdAt = clone.createdAt;
    this.updatedAt = clone.updatedAt;
  }

  private deseralizeCars(carsSerialized: ICarsSerialized, cars: ICarExpanded[]) {
    const carsDeserialized: ICar[] = [];

    const namesMapId = this.getCarNames(cars);
    const modelMapId = this.getCarModels(cars);

    Object.entries(carsSerialized).forEach(([carName, modelsMap]) => {
      const modelNames = Object.entries(modelsMap)
        .filter(([modelName, selected]) => selected)
        .map(([modelName]) => modelName);

      if (modelNames.length === 0) return;

      const carId = namesMapId[carName];
      const models = modelNames.map((name) => ({ id: modelMapId[name], name }));

      carsDeserialized.push({
        name: carName,
        id: carId,
        models,
      });
    });

    return carsDeserialized;
  }

  private getCarNames(cars: ICarExpanded[]) {
    const namesMapId: Record<string, number> = {};
    cars.forEach((car) => (namesMapId[car.name] = car.id));
    return namesMapId;
  }

  private getCarModels(cars: ICarExpanded[]) {
    const modelMapId: Record<string, number> = {};
    cars.forEach((car) => {
      car.models.forEach((model) => {
        modelMapId[model.name] = model.id;
      });
    });
    return modelMapId;
  }
}
