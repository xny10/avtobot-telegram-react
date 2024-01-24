import { Switch } from '@mui/material';
import { MouseEvent } from 'react';

type SwitchFilterProps = {
  filterId: number;
  isActive: boolean;
};

export function SwitchFilter({ filterId, isActive }: SwitchFilterProps) {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(`change filter id=${filterId} active state to=${!isActive}`);
  };

  return <Switch onClick={onClick} checked={isActive} />;
}
