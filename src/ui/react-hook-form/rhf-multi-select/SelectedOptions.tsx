import { Chip } from '@mui/material';
import { Control, useFormContext, useWatch } from 'react-hook-form';
import { IOption } from 'shared/types';

import styles from './styles.module.scss';

type SelectedOptionsProps<Option extends IOption, FieldValue> = {
  name: string;
  control?: Control<any, any>;
  options: Option[];
  getFieldValue?: (fieldValue: FieldValue) => string;
  isEqual?: (valueA: FieldValue, valueB: FieldValue) => boolean;
};

export function SelectedOptions<Option extends IOption, FieldValue>({
  name,
  control,
  options,
  getFieldValue,
  isEqual = (a, b) => a === b,
}: SelectedOptionsProps<Option, FieldValue>) {
  const { control: contextControl, setValue } = useFormContext();

  const selectedValues: FieldValue[] = useWatch({
    control: control ?? contextControl,
    name,
  });

  const onDeleteOption = (valueToDelete: FieldValue) => {
    setValue(
      name,
      selectedValues.filter((value) => {
        return !isEqual(value, valueToDelete);
      }),
      { shouldDirty: true }
    );
  };

  return (
    <div className={styles.selected_options}>
      {(() => {
        if (selectedValues.length === options.length || selectedValues.length === 0) {
          return <Chip variant="outlined" size="small" label="Все" />;
        }

        return selectedValues.map((value) => {
          let label: string;
          if (getFieldValue) label = getFieldValue(value as unknown as FieldValue);
          else label = value as string;

          return <Chip key={value as string} size="small" label={label} onDelete={() => onDeleteOption(value)} />;
        });
      })()}
    </div>
  );
}
