import { Checkbox, FormControlLabel } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Control, useController } from 'react-hook-form';

type RHFLabeledCheckboxProps = Parameters<typeof Checkbox>[0] &
  PropsWithChildren<{
    control: Control<any, any>;
    name: string;
    transformValue?: (value: any) => boolean;
    transformOnChange?: (value: any) => any;
  }>;

export function RHFLabeledCheckbox({
  control,
  name,
  children,
  transformValue,
  transformOnChange,
  ...rest
}: RHFLabeledCheckboxProps) {
  const {
    field: { name: RHFname, onBlur, onChange, ref, value, disabled },
  } = useController({ name, control });

  let checkboxValue = value;
  if (transformValue) checkboxValue = transformValue(value);

  const handleChange = () => {
    if (transformOnChange) onChange(transformOnChange(value));
    else onChange(value);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...rest}
          checked={checkboxValue}
          onChange={handleChange}
          inputRef={ref}
          disabled={disabled}
          onBlur={onBlur}
          name={RHFname}
        />
      }
      label={children}
    />
  );
}
