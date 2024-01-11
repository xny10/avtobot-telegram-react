import { Checkbox, FormControl, InputLabel, ListItemText, Select as MUISelect, MenuItem } from '@mui/material';
import { ReactNode, useId } from 'react';
import { Control, useController } from 'react-hook-form';

type BaseProps = {
  control: Control<any, any>;
  name: string;
  label?: string;
  options: any[];
  renderOption?: (data: any) => ReactNode;
  onOpen?: (...args: any[]) => void;
  loading?: boolean;
  error?: boolean;
  required?: boolean;
  size?: 'small' | 'medium';
  validateValue?: (options: any[], value: any) => boolean;
  labelProps?: Parameters<typeof InputLabel>[0];
  selectProps?: Parameters<typeof MUISelect>[0];
};

type SingleSelectProps = BaseProps & {
  multiple?: false;
  defaultValue?: any;
  renderValue?: never;
};

type MultipleSelectProps = BaseProps & {
  multiple?: true;
  defaultValue?: any[];
  renderValue: (value: any) => ReactNode;
};

type RHFSelectProps = SingleSelectProps | MultipleSelectProps;

export function RHFSelect({
  control,
  name,
  label,
  options,
  renderOption,
  defaultValue = '',
  required = false,
  multiple = false,
  onOpen,
  loading,
  error,
  renderValue,
  validateValue,
  size,
  labelProps,
  selectProps,
}: RHFSelectProps) {
  const {
    field: { onChange, name: fieldName, value },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const shouldValidate = !!validateValue;

  let valueToShow;
  if (!shouldValidate) {
    valueToShow = value;
  } else if (validateValue(options, value)) {
    valueToShow = value;
  } else {
    valueToShow = defaultValue;
  }

  const id = useId();

  // TODO: отрефакторить кхуям на нормальные пропсы
  return (
    <FormControl fullWidth>
      <InputLabel {...labelProps} id={id}>
        {label}
      </InputLabel>
      <MUISelect
        {...selectProps}
        size={size}
        labelId={id}
        name={fieldName}
        label={label}
        required={required}
        defaultValue={defaultValue}
        multiple={multiple}
        value={valueToShow}
        renderValue={(v) => (renderValue ? renderValue(v) : v)}
        displayEmpty
        onOpen={onOpen}
        onChange={onChange}
      >
        {(() => {
          if (error) return <MenuItem>Error loading options</MenuItem>;
          if (loading) return <MenuItem>Loading...</MenuItem>;

          if (options.length === 0) return <MenuItem>No options</MenuItem>;

          if (renderOption) {
            return options.map((option) => renderOption(option));
          }

          if (multiple) {
            return options.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={value.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ));
          }

          return options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ));
        })()}
      </MUISelect>
    </FormControl>
  );
}
