import SearchIcon from '@mui/icons-material/Search';
import { TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useController, useWatch } from 'react-hook-form';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { ICar, ICarsSerialized } from 'shared/types';
import { areAllBrandsSelected, setAllCarsSelection } from 'shared/utils/filter.utils';
import { LabeledCheckbox } from 'ui/labeled-checkbox';

import styles from './CarModelSelect.module.scss';
import { CarRow } from './CarRow';

type CarSelectProps = {
  cars: ICar[];
};

export function CarSelect({ cars }: CarSelectProps) {
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

  const itemData = useMemo(() => {
    return { carsFiltered, isEverythingSelected };
  }, [carsFiltered, isEverythingSelected]);

  return (
    <div className={styles.car_select_root}>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        label="Поиск"
        InputProps={{ endAdornment: <SearchIcon /> }}
      />
      <LabeledCheckbox checked={isEverythingSelected} onCheck={onToggleBrands}>
        Выбрать всё / Снять выделение
      </LabeledCheckbox>
      <AutoSizer>
        {({ width, height }: any) => (
          <FixedSizeList
            className="virtualized list"
            width={width}
            height={height}
            itemData={itemData}
            itemCount={carsFiltered.length}
            itemSize={50}
          >
            {CarRow}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}
