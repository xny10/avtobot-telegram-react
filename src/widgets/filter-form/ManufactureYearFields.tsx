import { MenuItem } from '@mui/material';
import { RangedInput } from 'features/filter';
import { memo, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form';

import styles from './styles.module.scss';

type ManufactureYearFieldsProps = {
  options: string[];
};

export const ManufactureYearFields = memo(function ManufactureYearFields({ options }: ManufactureYearFieldsProps) {
  const { control, setValue } = useFormContext();

  const renderOption = (option: string) => (
    <MenuItem key={option} value={option}>
      {option || 'Не выбрано'}
    </MenuItem>
  );

  const onClear = () => {
    setValue('manufactureYear.0', '', { shouldDirty: true });
    setValue('manufactureYear.1', '', { shouldDirty: true });
  };

  const valueLeft = useWatch({ name: 'manufactureYear.0' });
  const valueRight = useWatch({ name: 'manufactureYear.1' });

  const indexLeft = options.indexOf(valueLeft);
  const indexRight = options.indexOf(valueRight);

  const isValid = indexLeft >= indexRight;

  useEffect(() => {
    if (!isValid) {
      setValue('manufactureYear.1', '', { shouldDirty: true });
    }
  }, [isValid]);

  let availableOptionsRight;
  if (valueLeft === '') {
    availableOptionsRight = options;
  } else {
    const index = options.indexOf(valueLeft);
    availableOptionsRight = options.slice(0, index + 1);
  }

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
          options={availableOptionsRight}
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
