import FileCopyIcon from '@mui/icons-material/FileCopy';
import { IconButton } from '@mui/material';
import { MouseEvent } from 'react';

type CopyFilterProps = {
  filterId: number;
};

export function CopyFilter({ filterId }: CopyFilterProps) {
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    // do something...
    console.log(`filter id=${filterId} copied`);
  };
  return (
    <IconButton onClick={onCopy}>
      <FileCopyIcon color="primary" />
    </IconButton>
  );
}
