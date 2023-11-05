import { MenuItem } from '@mui/material';
import { RangedInput } from 'features/filter/ui/ranged-input';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form/rhf-select';
import { RHFTextField } from 'ui/react-hook-form/rhf-text-field';

import styles from './styles.module.scss';

function insertDots(stringifiedNumber: string) {
  const chars = stringifiedNumber.split('').reverse();
  const newChars = [];
  for (let i = 0; i < chars.length; i += 1) {
    if (i % 3 === 0 && i !== 0) newChars.push('.');
    newChars.push(chars[i]);
  }
  return newChars.reverse().join('');
}

export function PriceFields() {
  const { control, setValue } = useFormContext();

  const optionMapLabel = useMemo(() => {
    const map = new Map<string, string>();
    map.set('', 'Не выбрано');
    for (let i = 200000; i <= 1200000; i += 200000) {
      map.set(i.toString(), insertDots(i.toString()));
    }
    for (let i = 1500000; i < 5000000; i += 500000) {
      map.set(i.toString(), insertDots(i.toString()));
    }
    for (let i = 5000000; i < 20000000; i += 1000000) {
      map.set(i.toString(), insertDots(i.toString()));
    }
    return map;
  }, []);

  const options = Array.from(optionMapLabel.keys());

  const renderValue = (option: string) => {
    return optionMapLabel.get(option);
  };
  const renderOption = (option: string) => (
    <MenuItem key={option} value={option}>
      {optionMapLabel.get(option)}
    </MenuItem>
  );

  const onClear = () => {
    setValue('price.0', '');
    setValue('price.1', '');
  };

  return (
    <RangedInput
      title="Цена"
      onClear={onClear}
      LeftInput={
        <RHFSelect
          options={options}
          control={control}
          name="price.0"
          label="от"
          renderValue={renderValue}
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
          name="price.1"
          label="до"
          renderValue={renderValue}
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
}
