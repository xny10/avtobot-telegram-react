import { MenuItem, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form/rhf-select';

import styles from './styles.module.scss';

export function MileageFields() {
  const { control } = useFormContext();

  const optionMapLabel = new Map<string, string>();
  optionMapLabel.set('', 'Не выбрано');
  for (let i = 10000; i < 100000; i++) {
    optionMapLabel.set(i.toString(), i.toString());
  }
  optionMapLabel.set('150000', '150000');
  optionMapLabel.set('200000', '200000');
  optionMapLabel.set('250000', '250000');
  optionMapLabel.set('300000', '300000');

  const options = Array.from(optionMapLabel.keys());

  const renderOption = (option: string) => (
    <MenuItem key={option} value={option}>
      {optionMapLabel.get(option)}
    </MenuItem>
  );

  return (
    <div>
      <Typography>Пробег, км</Typography>
      <div className={styles.double_field}>
        <RHFSelect
          options={options}
          control={control}
          name="mileage.0"
          label="от"
          renderOption={renderOption}
          labelProps={{
            style: {
              left: -13,
            },
          }}
        />
        <div className={styles.double_field_divider} />
        <RHFSelect
          options={options}
          control={control}
          name="mileage.1"
          label="до"
          renderOption={renderOption}
          selectProps={{
            placeholder: 'до',
          }}
          labelProps={{
            style: {
              left: -13,
            },
          }}
        />
      </div>
    </div>
  );
}
