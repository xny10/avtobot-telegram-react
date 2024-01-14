import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
import { produce } from 'immer';
import { memo, useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { useDialog } from 'shared/hooks/useDialog';
import { AutoSizerRenderProps, ICar, ICarsSerialized } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';
import { LabeledCheckbox } from 'ui/labeled-checkbox';
import { OpenStacked } from 'ui/open-stacked';

import styles from './CarModelSelect.module.scss';
import { ModelRow } from './ModelRow';

type CarCheckboxProps = {
  car: ICar;
};

export const CarCheckbox = memo(function CarCheckbox({ car }: CarCheckboxProps) {
  const {
    field: { value, onChange },
  } = useController({ name: `cars.${car.name}` });

  const carSerialized = value as ICarsSerialized[string];

  const entries = Object.entries(carSerialized);
  const selectedLength = entries.reduce((totalSelected, [model, selected]) => {
    if (selected) totalSelected++;
    return totalSelected;
  }, 0);
  const areAllModelsSelected = selectedLength === entries.length;

  // TODO посмотреть нет ли тут сломанных/бессмысленных memo, callback
  const onTriggerAll = (select: boolean) => {
    const newValue = produce(carSerialized, (draft) => {
      Object.keys(draft).forEach((model) => {
        draft[model] = select;
      });
    });
    onChange(newValue);
  };

  const onTriggerMake = useCallback(
    (makeName: string) => {
      const newValue = produce(carSerialized, (draft) => {
        draft[makeName] = !draft[makeName];
      });
      onChange(newValue);
    },
    [carSerialized]
  );

  const [search, setSearch] = useState('');

  const { open, onOpen, onClose } = useDialog();

  const carModelsFiltered = useMemo(() => {
    return car.models.filter((make) => make.name.toLowerCase().includes(search.toLowerCase()));
  }, [car, search]);

  const itemData = useMemo(() => {
    return {
      onTriggerMake,
      carModels: carModelsFiltered,
      carSerialized,
    };
  }, [onTriggerMake, carModelsFiltered, carSerialized]);

  return (
    <div>
      <div className={styles.brand_checkbox_wrapper}>
        <LabeledCheckbox checked={areAllModelsSelected} onCheck={onTriggerAll}>
          {(() => {
            if (areAllModelsSelected) {
              return `${car.name} (все)`;
            }
            if (selectedLength > 0) {
              return `${car.name} (${selectedLength})`;
            }
            return car.name;
          })()}
        </LabeledCheckbox>
        <IconButton onClick={onOpen}>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </div>
      <OpenStacked open={open}>
        <BaseLayout backLinkBehavior={onClose} title={car.name}>
          <div className={styles.stack_with_virtualized_list_wrapper}>
            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              label="Поиск"
              InputProps={{ endAdornment: <SearchIcon /> }}
            />
            <LabeledCheckbox checked={areAllModelsSelected} onCheck={onTriggerAll}>
              Выбрать всё / Снять выделение
            </LabeledCheckbox>
            <AutoSizer>
              {({ width, height }: AutoSizerRenderProps) => (
                <FixedSizeList
                  width={width}
                  height={height}
                  itemData={itemData}
                  itemCount={carModelsFiltered.length}
                  itemSize={50}
                >
                  {ModelRow}
                </FixedSizeList>
              )}
            </AutoSizer>
          </div>
        </BaseLayout>
      </OpenStacked>
    </div>
  );
});
