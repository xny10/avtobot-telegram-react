import { Button } from '@mui/material';
import { AnyFunction } from 'shared/types';

type SaveFilterProps = {
  onSubmit: AnyFunction;
  disabled?: boolean;
};

export function SaveFilter({ onSubmit, disabled }: SaveFilterProps) {
  return (
    <Button variant="contained" onClick={onSubmit} disabled={disabled}>
      Сохранить
    </Button>
  );
}
