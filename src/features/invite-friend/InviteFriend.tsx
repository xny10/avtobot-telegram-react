import WavingHandIcon from '@mui/icons-material/WavingHand';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';

import styles from './InviteFriend.module.scss';

type InviteFriendProps = {
  inviteLink: string;
};

export function InviteFriend({ inviteLink }: InviteFriendProps) {
  const [isError, setIsError] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      toast.success('Ссылка скопирована');
      setIsError(false);
    } catch (e) {
      toast.error('Не получилось скопировать');
      setIsError(true);
    }
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <WavingHandIcon />
        </ListItemIcon>
        <ListItemText>
          <span className={styles.link_text}>
            <span>Пригласить друга</span>
            {isError && (
              <a href={inviteLink} className={styles.invite_link}>
                {inviteLink}
              </a>
            )}
          </span>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
