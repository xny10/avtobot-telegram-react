import { MenuItem } from '@mui/material';
import { RangedInput } from 'features/filter';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form';

import styles from './styles.module.scss';

export const ManufactureDateFields = memo(function ManufactureDateFields() {
  const { control, setValue } = useFormContext();

  const optionMapLabel = new Map<string, string>();
  optionMapLabel.set('', 'Не выбрано');
  for (let i = new Date().getFullYear(); i > 1980; i--) {
    optionMapLabel.set(i.toString(), i.toString());
  }

  const options = Array.from(optionMapLabel.keys());

  const renderOption = (option: string) => (
    <MenuItem key={option} value={option}>
      {optionMapLabel.get(option)}
    </MenuItem>
  );

  const onClear = () => {
    setValue('manufactureYear.0', '');
    setValue('manufactureYear.1', '');
  };

  return (
    <RangedInput
      title="Год выпуска"
      onClear={onClear}
      LeftInput={
        <RHFSelect
          options={options}
          control={control}
          name="manufactureYear.0"
          label="от"
          renderOption={renderOption}
          labelProps={{
            className: styles.select_label,
            style: {
              left: -13,
            },
          }}
        />
      }
      RightInput={
        <RHFSelect
          options={options}
          control={control}
          name="manufactureYear.1"
          label="до"
          renderOption={renderOption}
          labelProps={{
            className: styles.select_label,
            style: {
              left: -13,
            },
          }}
        />
      }
    />
  );
});
