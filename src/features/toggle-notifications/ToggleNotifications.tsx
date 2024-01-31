import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { FormControlLabel, ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useToggleNotifications } from 'shared/hooks/user/useToggleNotifications';

type ToggleNotificationsProps = {
  isActive: boolean;
};

export function ToggleNotifications({ isActive: isActiveByDefault }: ToggleNotificationsProps) {
  const [isActive, setIsActive] = useState(isActiveByDefault);

  const [toggleNotifications, { isLoading }] = useToggleNotifications();

  const onChangeActive = async (active: boolean) => {
    const { success } = await toggleNotifications(active);
    if (success) {
      toast.success(active ? 'Уведомления включены' : 'Уведомления выключены');
      setIsActive(active);
    } else {
      toast.error('Произошла ошибка');
    }
  };

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <NotificationsActiveIcon />
        </ListItemIcon>
        <FormControlLabel
          control={<Switch checked={isActive} onClick={() => onChangeActive(!isActive)} disabled={isLoading} />}
          label="Уведомления"
        />
      </ListItemButton>
    </ListItem>
  );
}
