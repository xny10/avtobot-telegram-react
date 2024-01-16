import { ReactNode } from 'react';
import { Control } from 'react-hook-form';
import { IOption } from 'shared/types';
import { RHFSelect } from 'ui/react-hook-form';

import { SelectedOptions } from './SelectedOptions';
import styles from './styles.module.scss';

type MultiSelectProps<Option, FieldValue> = {
  name: string;
  control?: Control<any, any>;
  options: Option[];
  inputLabel: string;
  renderOption?: (option: Option) => ReactNode;
  getFieldValue?: (fieldValue: FieldValue) => string;
};

export function RHFMultiSelect<Option extends IOption, FieldValue>({
  name,
  control,
  options,
  inputLabel,
  renderOption,
  getFieldValue,
}: MultiSelectProps<Option, FieldValue>) {
  return (
    <div className={styles.select_wrapper}>
      <RHFSelect
        multiple
        control={control}
        name={name}
        options={options}
        renderValue={() => inputLabel}
        renderOption={renderOption}
      />
      <SelectedOptions name={name} control={control} options={options} getFieldValue={getFieldValue} />
    </div>
  );
}
