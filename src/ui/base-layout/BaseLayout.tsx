import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDialog } from 'shared/hooks/useDialog';
import { useTelegram } from 'shared/hooks/useTelegram';
import { useTelegramScrollLock } from 'shared/hooks/useTelegramScrollLock';
import { AnyFunction } from 'shared/types';

import styles from './styles.module.scss';

type BaseLayoutProps = PropsWithChildren<{
  title: string;
  backLinkBehavior?: 'previous_page' | 'exit_telegram' | AnyFunction;
  confirmGoBack?: boolean;
}>;

export function BaseLayout({
  children,
  title,
  backLinkBehavior = 'exit_telegram',
  confirmGoBack = false,
}: BaseLayoutProps) {
  const { tg } = useTelegram();
  const navigate = useNavigate();

  const { open: confirmOpen, onOpen: onOpenDialog, onClose: onCloseDialog } = useDialog();

  const initiateCloseBehavior = () => {
    if (typeof backLinkBehavior === 'function') backLinkBehavior();
    else if (backLinkBehavior === 'exit_telegram') tg.close();
    else navigate(-1);
  };

  const onClose = () => {
    if (confirmGoBack) onOpenDialog();
    else initiateCloseBehavior();
  };

  const { scrollableRef, contentRef } = useTelegramScrollLock();

  return (
    <div className={styles.layout_root} ref={scrollableRef}>
      <header className={styles.header}>
        <IconButton onClick={onClose} className={styles.exit_button}>
          <ArrowBackIcon className={styles.icon} />
        </IconButton>
        <Typography variant="h5" className={styles.title}>
          {title}
        </Typography>
      </header>
      <main className={styles.main} ref={contentRef}>
        {children}
      </main>
      <Dialog open={confirmOpen} onClose={onCloseDialog}>
        <DialogTitle>Вы действительно хотите выйти?</DialogTitle>
        <DialogContent>
          <DialogContentText>Изменения не сохранятся</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog}>Остаться</Button>
          <Button variant="contained" onClick={initiateCloseBehavior} color="error">
            Уйти
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
