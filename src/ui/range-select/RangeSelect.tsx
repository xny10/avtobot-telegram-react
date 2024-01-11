import { MenuItem } from '@mui/material';
import { RangedInput } from 'features/filter';
import { memo, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form';

import styles from './styles.module.scss';

type RangeSelectProps = {
  options: string[];
  name: string;
  label?: string;
  formatOption?: (option: string) => string;
  itemOrder?: 'asc' | 'desc';
};

export const RangeSelect = memo(function RangeSelect({
  options,
  name,
  label,
  formatOption,
  itemOrder = 'asc',
}: RangeSelectProps) {
  const { control, setValue } = useFormContext();

  const renderOption = (option: string) => {
    let renderableOption = option;
    if (renderableOption === '') renderableOption = 'Не выбрано';
    else if (formatOption) renderableOption = formatOption(renderableOption);

    return (
      <MenuItem key={option} value={option}>
        {renderableOption}
      </MenuItem>
    );
  };

  const onClear = () => {
    setValue(`${name}.0`, '', { shouldDirty: true });
    setValue(`${name}.1`, '', { shouldDirty: true });
  };

  const valueLeft = useWatch({ name: `${name}.0` });
  const valueRight = useWatch({ name: `${name}.1` });

  const indexLeft = options.indexOf(valueLeft);
  const indexRight = options.indexOf(valueRight);

  const isValid = valueLeft === '' || (itemOrder === 'desc' ? indexLeft >= indexRight : indexLeft <= indexRight);

  useEffect(() => {
    if (!isValid) {
      setValue(`${name}.1`, '', { shouldDirty: true });
    }
  }, [isValid]);

  let availableOptionsRight;
  if (valueLeft === '') {
    availableOptionsRight = options;
  } else {
    const index = options.indexOf(valueLeft);
    if (itemOrder === 'desc') {
      availableOptionsRight = options.slice(0, index + 1);
    } else {
      availableOptionsRight = ['', ...options.slice(index)];
    }
  }

  return (
    <RangedInput
      title={label ?? name}
      onClear={onClear}
      LeftInput={
        <RHFSelect
          options={options}
          control={control}
          name={`${name}.0`}
          label="от"
          renderOption={renderOption}
          renderValue={formatOption}
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
          name={`${name}.1`}
          label="до"
          renderOption={renderOption}
          renderValue={formatOption}
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
