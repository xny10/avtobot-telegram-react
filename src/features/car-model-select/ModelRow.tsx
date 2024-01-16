import { CSSProperties } from 'react';
import { ICarsSerialized, IManufacturer } from 'shared/types';

import { ModelCheckbox } from './MakeCheckbox';

type ModelRowProps = {
  index: number;
  style: CSSProperties;
  data: {
    carModels: IManufacturer['models'];
    onTriggerMake: (makeName: string) => void;
    carSerialized: ICarsSerialized[string];
  };
};

export function ModelRow({ index, style, data }: ModelRowProps) {
  const model = data.carModels[index];
  return (
    //* Ключ тут нужен, компонент используется как рендер функция
    <div key={`${model.id}`} style={style}>
      <ModelCheckbox
        key={model.id}
        modelName={model.name}
        checked={data.carSerialized[model.name]}
        onCheck={data.onTriggerMake}
      />
    </div>
  );
}
