import { MenuItem } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { IFilterEngine } from 'shared/types';
import { RHFSelect } from 'ui/react-hook-form/rhf-select';

export function FuelField() {
  const { control } = useFormContext();

  const options = ['', 'petrol', 'diesel', 'electric', 'gas', 'hybrid'];
  const optionMapLabel = new Map<IFilterEngine, string>();

  const variants = {
    petrol: 'Бензин',
    diesel: 'Дизель',
    electric: 'Электро',
    gas: 'Газ',
    hybrid: 'Гибрид',
  };

  optionMapLabel.set('', 'Не выбрано');
  Object.entries(variants).forEach(([key, value]) => {
    optionMapLabel.set(key as IFilterEngine, value);
  });

  const renderValue = (option: IFilterEngine) => {
    return optionMapLabel.get(option);
  };
  const renderOption = (option: IFilterEngine) => (
    <MenuItem key={option} value={option}>
      {optionMapLabel.get(option)}
    </MenuItem>
  );

  return (
    <RHFSelect
      options={options}
      renderValue={renderValue}
      renderOption={renderOption}
      control={control}
      name="engineType"
      label="Топливо"
      labelProps={{
        style: {
          left: -13,
        },
      }}
    />
  );
}
