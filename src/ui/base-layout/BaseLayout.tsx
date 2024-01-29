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
import { PropsWithChildren, Suspense, startTransition } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { useDialog } from 'shared/hooks/useDialog';
import { useTelegram } from 'shared/hooks/useTelegram';
import { useTelegramScrollLock } from 'shared/hooks/useTelegramScrollLock';
import { AnyFunction } from 'shared/types';

import styles from './styles.module.scss';

type BaseLayoutProps = PropsWithChildren<{
  title: string;
  backLinkBehavior?: AnyFunction;
  confirmGoBack?: boolean;
}>;

export function BaseLayout({ children, title, backLinkBehavior, confirmGoBack = false }: BaseLayoutProps) {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const location = useLocation();

  const { open: confirmOpen, onOpen: onOpenDialog, onClose: onCloseDialog } = useDialog();

  const initiateCloseBehavior = () => {
    if (typeof backLinkBehavior === 'function') return backLinkBehavior();
    if (location.pathname !== ROUTES.menu) {
      if (location.key !== 'default') return navigate(-1);
      return navigate(ROUTES.menu);
    }
    return tg.close();
  };

  const onClose = () => {
    if (confirmGoBack) onOpenDialog();
    else startTransition(initiateCloseBehavior);
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
        <Suspense fallback="">{children}</Suspense>
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
