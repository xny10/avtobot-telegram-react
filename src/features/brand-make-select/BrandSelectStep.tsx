import SearchIcon from '@mui/icons-material/Search';
import { TextField, Typography } from '@mui/material';
import { CSSProperties, useMemo, useState } from 'react';
import { useController, useWatch } from 'react-hook-form';
import { FixedSizeList } from 'react-window';
import { ICar, ICarsSerialized } from 'shared/types';
import { areAllBrandsSelected, setAllCarsSelection } from 'shared/utils/filter.utils';
import { LabeledCheckbox } from 'ui/labeled-checkbox';

import { BrandCheckbox } from './BrandCheckbox';
import styles from './BrandModelSelect.module.scss';
import { CarRow } from './CarRow';

type BrandSelectStepProps = {
  cars: ICar[];
};

export function BrandSelectStep({ cars }: BrandSelectStepProps) {
  const [search, setSearch] = useState('');

  const carsFiltered = cars.filter((car) => car.name.toLowerCase().includes(search.toLowerCase()));

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
        <FixedSizeList
          height={500}
          itemData={{ carsFiltered, isEverythingSelected }}
          itemCount={carsFiltered.length}
          itemSize={50}
          width={600}
        >
          {CarRow}
        </FixedSizeList>
        <div className={styles.checkbox_list}>
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
