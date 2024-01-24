import { CSSProperties } from 'react';
import { ICarExpanded } from 'shared/types';

import { CarCheckbox } from './CarCheckbox';

type CarRowProps = {
  index: number;
  style: CSSProperties;
  data: {
    carsFiltered: ICarExpanded[];
    isEverythingSelected: boolean;
  };
};

export function CarRow({ index, style, data }: CarRowProps) {
  const car = data.carsFiltered[index];
  return (
    //* Ключ тут нужен, компонент используется как рендер функция
    <div key={`${car.id}${data.isEverythingSelected}`} style={style}>
      <CarCheckbox car={car} />
    </div>
  );
}
