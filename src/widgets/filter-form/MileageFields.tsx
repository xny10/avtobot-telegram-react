import { MenuItem } from '@mui/material';
import { RangedInput } from 'features/filter/ui/ranged-input';
import { useFormContext } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form/rhf-select';

import styles from './styles.module.scss';

export function MileageFields() {
  const { control, setValue } = useFormContext();

  const optionMapLabel = new Map<string, string>();
  optionMapLabel.set('', 'Не выбрано');
  for (let i = 10000; i < 100000; i += 10000) {
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

  const onClear = () => {
    setValue('mileage.0', '');
    setValue('mileage.1', '');
  };

  return (
    <RangedInput
      title="Пробег, км"
      onClear={onClear}
      leftInput={
        <RHFSelect
          options={options}
          control={control}
          name="mileage.0"
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
      rightInput={
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
