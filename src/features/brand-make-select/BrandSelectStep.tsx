import SearchIcon from '@mui/icons-material/Search';
import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useController, useWatch } from 'react-hook-form';
import { ICar, ICarsSerialized } from 'shared/types';
import { areAllBrandsSelected, setAllCarsSelection } from 'shared/utils/filter.utils';
import { LabeledCheckbox } from 'ui/labeled-checkbox';

import { BrandCheckbox } from './BrandCheckbox';
import styles from './BrandModelSelect.module.scss';

type BrandSelectStepProps = {
  cars: ICar[];
};

export function BrandSelectStep({ cars }: BrandSelectStepProps) {
  const [search, setSearch] = useState('');

  const carsFiltered = cars.filter((car) => car.brand.toLowerCase().includes(search.toLowerCase()));

  const { field } = useController({ name: 'cars' });

  const value: ICarsSerialized = field.value;

  const isEverythingSelected = areAllBrandsSelected(value);
  //* необходимо для своевременного пересчёта isEverythingSelected
  useWatch({ name: 'cars' });

  const onToggleBrands = (selected: boolean) => {
    field.onChange(setAllCarsSelection(value, selected));
  };

  return (
    <div>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        label="Поиск"
        InputProps={{ endAdornment: <SearchIcon /> }}
      />
      <div className={styles.checkboxes}>
        <LabeledCheckbox checked={isEverythingSelected} onCheck={onToggleBrands}>
          Выбрать всё / Снять выделение
        </LabeledCheckbox>
        <div className={styles.checkbox_list}>
          {carsFiltered.map((car) => {
            return <BrandCheckbox key={`${car.id}${isEverythingSelected}`} car={car} />;
          })}
          {carsFiltered.length !== cars.length && (
            <Typography color="gray">
              Показано {carsFiltered.length} из {cars.length}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}
