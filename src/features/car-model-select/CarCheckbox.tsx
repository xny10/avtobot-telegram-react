import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField, Typography } from '@mui/material';
import { produce } from 'immer';
import { memo, useState } from 'react';
import { useController } from 'react-hook-form';
import { useDialog } from 'shared/hooks/useDialog';
import { ICar, ICarsSerialized } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';
import { LabeledCheckbox } from 'ui/labeled-checkbox';
import { OpenStacked } from 'ui/open-stacked';

import styles from './CarModelSelect.module.scss';
import { ModelCheckbox } from './MakeCheckbox';

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

  const onTriggerAll = (select: boolean) => {
    const newValue = produce(carSerialized, (draft) => {
      Object.keys(draft).forEach((model) => {
        draft[model] = select;
      });
    });
    onChange(newValue);
  };

  const onTriggerMake = (makeName: string) => {
    const newValue = produce(carSerialized, (draft) => {
      draft[makeName] = !draft[makeName];
    });
    onChange(newValue);
  };

  const [search, setSearch] = useState('');

  const { open, onOpen, onClose } = useDialog();

  const carModelsFiltered = car.models.filter((make) => make.name.toLowerCase().includes(search.toLowerCase()));

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
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            label="Поиск"
            InputProps={{ endAdornment: <SearchIcon /> }}
          />
          <div className={styles.checkboxes}>
            <LabeledCheckbox checked={areAllModelsSelected} onCheck={onTriggerAll}>
              Выбрать всё / Снять выделение
            </LabeledCheckbox>
            <div className={styles.checkbox_list}>
              {carModelsFiltered.map((model) => (
                <ModelCheckbox
                  key={model.id}
                  modelName={model.name}
                  checked={carSerialized[model.name]}
                  onCheck={onTriggerMake}
                />
              ))}
              {carModelsFiltered.length !== car.models.length && (
                <Typography color="gray">
                  Показано {carModelsFiltered.length} из {car.models.length}
                </Typography>
              )}
            </div>
          </div>
        </BaseLayout>
      </OpenStacked>
    </div>
  );
});
