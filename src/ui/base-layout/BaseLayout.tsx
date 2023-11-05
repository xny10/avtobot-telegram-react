import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';

import styles from './styles.module.scss';

type BaseLayoutProps = PropsWithChildren<{
  title: string;
}>;

export function BaseLayout({ children, title }: BaseLayoutProps) {
  const { tg } = useTelegram();

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      <header className={styles.header}>
        <IconButton onClick={onClose} className={styles.exit_button}>
          <ArrowBackIcon className={styles.icon} />
        </IconButton>
        <Typography variant="h5" className={styles.title}>
          {title}
        </Typography>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
