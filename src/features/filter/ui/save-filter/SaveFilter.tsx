import { Button } from '@mui/material';

type SaveFilterProps = {
  onSubmit: (...args: any[]) => void;
  disabled?: boolean;
};

export function SaveFilter({ onSubmit, disabled }: SaveFilterProps) {
  return (
    <Button variant="contained" onClick={onSubmit} disabled={disabled}>
      Сохранить
    </Button>
  );
}
