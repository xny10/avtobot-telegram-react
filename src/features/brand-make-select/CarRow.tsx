import { CSSProperties } from 'react';
import { ICar } from 'shared/types';

import { BrandCheckbox } from './BrandCheckbox';

type CarRowProps = {
  index: number;
  style: CSSProperties;
  data: {
    carsFiltered: ICar[];
    isEverythingSelected: boolean;
  };
};

export function CarRow({ index, style, data }: CarRowProps) {
  const car = data.carsFiltered[index];
  return (
    <div key={`${car.id}${data.isEverythingSelected}`} style={style}>
      <BrandCheckbox car={car} />
    </div>
  );
}
