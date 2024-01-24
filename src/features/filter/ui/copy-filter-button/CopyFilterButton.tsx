import FileCopyIcon from '@mui/icons-material/FileCopy';
import { IconButton } from '@mui/material';
import { MouseEvent } from 'react';

type CopyFilterButtonProps = {
  filterId: number;
};

export function CopyFilterButton({ filterId }: CopyFilterButtonProps) {
  const onCopy = () => {
    // do something...
    console.log(`filter id=${filterId} copied`);
  };
  return (
    <IconButton onClick={onCopy}>
      <FileCopyIcon color="primary" />
    </IconButton>
  );
}
