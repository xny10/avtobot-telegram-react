import { ICar, IFilter, IFilterEngine, IRangeTuple, ISearchType } from 'shared/types';

export class CopyFilterDto {
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

  constructor(filter: IFilter) {
    const clone = structuredClone(filter);
    this.userId = clone.userId;
    this.name = `${clone.name} (2)`;
    this.isActive = clone.isActive;
    this.carChoices = clone.carChoices;
    this.price = clone.price;
    this.manufactureYear = clone.manufactureYear;
    this.mileage = clone.mileage;
    this.engineType = clone.engineType;
    this.regionIds = clone.regionIds;
    this.cityIds = clone.cityIds;
    this.searchType = clone.searchType;
    this.createdAt = clone.createdAt;
    this.updatedAt = clone.updatedAt;
  }
}
