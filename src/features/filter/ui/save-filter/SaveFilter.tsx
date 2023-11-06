import { Button } from '@mui/material';

type SaveFilterProps = {
  onSubmit: (...args: any[]) => void;
};

export function SaveFilter({ onSubmit }: SaveFilterProps) {
  return (
    <Button variant="contained" onClick={onSubmit}>
      Сохранить
    </Button>
  );
}
