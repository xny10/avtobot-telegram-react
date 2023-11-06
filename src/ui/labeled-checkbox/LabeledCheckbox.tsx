import { Checkbox, FormControlLabel } from '@mui/material';
import { PropsWithChildren } from 'react';

type LabeledCheckboxProps = PropsWithChildren<{
  checked: boolean;
  onCheck: (checked: boolean) => void;
}>;

export function LabeledCheckbox({ children, checked, onCheck }: LabeledCheckboxProps) {
  return (
    <FormControlLabel control={<Checkbox checked={checked} onChange={() => onCheck(!checked)} />} label={children} />
  );
}
