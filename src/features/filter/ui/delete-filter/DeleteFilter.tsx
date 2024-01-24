import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { MouseEvent } from 'react';

type DeleteFilterProps = {
  filterId: number;
};

export function DeleteFilter({ filterId }: DeleteFilterProps) {
  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    // do something...
    console.log(`filter id=${filterId} deleted`);
  };
  return (
    <IconButton onClick={onDelete}>
      <DeleteIcon color="primary" />
    </IconButton>
  );
}
