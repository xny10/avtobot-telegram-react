import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { MouseEvent } from 'react';

type DeleteFilterProps = {
  filterId: string;
};

export function DeleteFilter({ filterId }: DeleteFilterProps) {
  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // do something...
    console.log(`filter id=${filterId} deleted`);
  };
  return (
    <IconButton onClick={onDelete}>
      <DeleteIcon color="primary" />
    </IconButton>
  );
}
