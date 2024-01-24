import { Switch } from '@mui/material';
import { useToggleFilter } from 'shared/hooks/filter/useToggleFilter';

type SwitchFilterProps = {
  filterId: number;
  isActive: boolean;
};

export function ToggleFilter({ filterId, isActive }: SwitchFilterProps) {
  const [toggleFilter, { isLoading }] = useToggleFilter();

  const onToggle = async () => {
    await toggleFilter(filterId, !isActive);
  };

  return <Switch onClick={onToggle} checked={isActive} disabled={isLoading} />;
}
