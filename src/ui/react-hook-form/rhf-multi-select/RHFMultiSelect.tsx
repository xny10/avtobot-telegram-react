import { Control } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form';

import { SelectedOptions } from './SelectedOptions';
import styles from './styles.module.scss';

type MultiSelectProps = {
  name: string;
  control?: Control<any, any>;
  options: string[];
  inputLabel: string;
};

export function RHFMultiSelect({ name, control, options, inputLabel }: MultiSelectProps) {
  return (
    <div className={styles.select_wrapper}>
      <RHFSelect multiple control={control} name={name} options={options} renderValue={() => inputLabel} />
      <SelectedOptions name={name} control={control} options={options} />
    </div>
  );
}
