import { Switch } from '@mui/material';

type SwitchFilterProps = {
  filterId: number;
  isActive: boolean;
};

export function ToggleFilter({ filterId, isActive }: SwitchFilterProps) {
  const onClick = () => {
    console.log(`change filter id=${filterId} active state to=${!isActive}`);
  };

  return <Switch onClick={onClick} checked={isActive} />;
}
