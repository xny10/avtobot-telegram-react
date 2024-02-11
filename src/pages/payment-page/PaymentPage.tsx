import { Button, Typography } from '@mui/material';
import { theme } from 'shared/config/theme';
import { useUserMeta } from 'shared/hooks/user/useUserMeta';
import { authService } from 'shared/services/Auth.service';
import { formatDate } from 'shared/utils/date.utils';
import { BaseLayout } from 'ui/base-layout';
import { StartupNotTelegram } from 'ui/startup-not-telegram';

import styles from './PaymentPage.module.scss';

export function PaymentPage() {
  const { data, isLoading, error } = useUserMeta();

  if (!authService.isOpenedInTelegram()) {
    return <StartupNotTelegram />;
  }

  if (!!error) {
    return (
      <BaseLayout title="Подписка">
        <Typography variant="h5">Произошла ошибка</Typography>
        <Typography>{error.message}</Typography>
      </BaseLayout>
    );
  }

  if (isLoading || !data) {
    return (
      <BaseLayout title="Подписка">
        <Typography variant="h5">Загрузка...</Typography>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout title="Подписка">
      <div className={styles.layout}>
        {(() => {
          if (data.subscription && data.subscriptionEnds) {
            return (
              <Typography align="center" variant="h5" color={theme.palette.success.main}>
                Активна до <br />
                {formatDate(data.subscriptionEnds)}
              </Typography>
            );
          }
          return (
            <Button className={styles.buy_subscription} variant="contained">
              оформить подписку
            </Button>
          );
        })()}
      </div>
    </BaseLayout>
  );
}
