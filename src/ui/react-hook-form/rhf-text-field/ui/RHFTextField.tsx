import { TextField, TextFieldProps } from '@mui/material';
import { Control, UseControllerProps, useController } from 'react-hook-form';

type RHFTextFieldProps = TextFieldProps & {
  control: Control<any, any>;
  name: string;
  rules?: UseControllerProps['rules'];
};

export function RHFTextField({
  control,
  name,
  rules,
  defaultValue = '',
  required = false,
  ...props
}: RHFTextFieldProps) {
  const {
    field: { onChange, onBlur, name: fieldName, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { ...rules, required },
    defaultValue,
  });

  return (
    <TextField
      {...props}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={fieldName}
      inputRef={ref}
      error={invalid}
      helperText={invalid && error?.message}
    />
  );
}
