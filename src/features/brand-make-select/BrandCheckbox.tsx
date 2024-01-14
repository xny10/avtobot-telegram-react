import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField, Typography } from '@mui/material';
import { produce } from 'immer';
import { memo, useState } from 'react';
import { useController } from 'react-hook-form';
import { ICar, ICarsSerialized } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';
import { LabeledCheckbox } from 'ui/labeled-checkbox';
import { OpenStacked } from 'ui/open-stacked';

import styles from './BrandModelSelect.module.scss';
import { MakeCheckbox } from './MakeCheckbox';

type BrandCheckboxProps = {
  car: ICar;
};

export const BrandCheckbox = memo(function BrandCheckbox({ car }: BrandCheckboxProps) {
  const {
    field: { value, onChange },
  } = useController({ name: `cars.${car.name}` });

  const carSerialized = value as ICarsSerialized[string];

  const entries = Object.entries(carSerialized);
  const selectedLength = entries.reduce((totalSelected, [make, selected]) => {
    if (selected) totalSelected++;
    return totalSelected;
  }, 0);
  const isAllMakesSelected = selectedLength === entries.length;

  const onTriggerAll = (select: boolean) => {
    const newValue = produce(carSerialized, (draft) => {
      Object.keys(draft).forEach((make) => {
        draft[make] = select;
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

  const [open, setOpen] = useState(false);

  const carMakesFiltered = car.models.filter((make) => make.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className={styles.brand_checkbox_wrapper}>
        <LabeledCheckbox checked={isAllMakesSelected} onCheck={onTriggerAll}>
          {(() => {
            if (isAllMakesSelected) {
              return `${car.name} (все)`;
            }
            if (selectedLength > 0) {
              return `${car.name} (${selectedLength})`;
            }
            return car.name;
          })()}
        </LabeledCheckbox>
        <IconButton onClick={() => setOpen(true)}>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </div>
      <OpenStacked open={open}>
        <BaseLayout backLinkBehavior={() => setOpen(false)} title={car.name}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            label="Поиск"
            InputProps={{ endAdornment: <SearchIcon /> }}
          />
          <div className={styles.checkboxes}>
            <LabeledCheckbox checked={isAllMakesSelected} onCheck={onTriggerAll}>
              Выбрать всё / Снять выделение
            </LabeledCheckbox>
            <div className={styles.checkbox_list}>
              {carMakesFiltered.map((make) => (
                <MakeCheckbox
                  key={make.id}
                  makeName={make.name}
                  checked={carSerialized[make.name]}
                  onCheck={onTriggerMake}
                />
              ))}
              {carMakesFiltered.length !== car.models.length && (
                <Typography color="gray">
                  Показано {carMakesFiltered.length} из {car.models.length}
                </Typography>
              )}
            </div>
          </div>
        </BaseLayout>
      </OpenStacked>
    </div>
  );
});
