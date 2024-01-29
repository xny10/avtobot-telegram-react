import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { List } from '@mui/material';
import { InviteFriend } from 'features/invite-friend';
import { ToggleNotifications } from 'features/toggle-notifications';
import { ROUTES } from 'shared/config/routes';
import { IUserMeta } from 'shared/types';

import { NavLink } from './NavLink';

type MenuProps = {
  userMeta: IUserMeta;
};

export function Menu({ userMeta }: MenuProps) {
  return (
    <List>
      <NavLink url={ROUTES.payment} label="Подписка и оплата" icon={<LoyaltyIcon />} />
      <NavLink url={ROUTES.filters} label="Мои фильтры" icon={<FormatListNumberedIcon />} />
      <ToggleNotifications isActive={userMeta.isRecievingActive} />
      <InviteFriend inviteLink={userMeta.inviteLink} />
    </List>
  );
}
