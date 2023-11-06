import FileCopyIcon from '@mui/icons-material/FileCopy';
import { IconButton } from '@mui/material';
import { MouseEvent } from 'react';

type CopyFilterProps = {
  filterId: string;
};

export function CopyFilter({ filterId }: CopyFilterProps) {
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // do something...
    console.log(`filter id=${filterId} copied`);
  };
  return (
    <IconButton onClick={onCopy}>
      <FileCopyIcon color="primary" />
    </IconButton>
  );
}
