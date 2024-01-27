import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

type MenuProps = {};

export function Menu({}: MenuProps) {
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
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <WavingHandIcon />
          </ListItemIcon>
          <ListItemText>Пригласить друга</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
