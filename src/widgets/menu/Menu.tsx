import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { InviteFriend } from 'features/invite-friend';
import { IMenu } from 'shared/types';

type MenuProps = {
  menu: IMenu;
};

export function Menu({ menu }: MenuProps) {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LoyaltyIcon />
          </ListItemIcon>
          <ListItemText>Подписка и оплата</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <FormatListNumberedIcon />
          </ListItemIcon>
          <ListItemText>Мои фильтры</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <FormControlLabel control={<Switch checked />} label="Уведомления" />
        </ListItemButton>
      </ListItem>
      <InviteFriend inviteLink={menu.inviteLink} />
    </List>
  );
}
