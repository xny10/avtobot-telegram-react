import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { InviteFriend } from 'features/invite-friend';
import { ToggleNotifications } from 'features/toggle-notifications';
import { IMenu } from 'shared/types';

import { MyFiltersLink } from './MyFiltersLink';

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
      <MyFiltersLink />
      <ToggleNotifications isActive={menu.alertsEnabled} />
      <InviteFriend inviteLink={menu.inviteLink} />
    </List>
  );
}
