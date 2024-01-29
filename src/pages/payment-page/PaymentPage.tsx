import { Button, Typography } from '@mui/material';
import { theme } from 'shared/config/theme';
import { useTelegram } from 'shared/hooks/useTelegram';
import { authService } from 'shared/services/Auth.service';
import { IMenu } from 'shared/types';
import { formatDate } from 'shared/utils/date.utils';
import { BaseLayout } from 'ui/base-layout';
import { StartupNotTelegram } from 'ui/startup-not-telegram';

import styles from './PaymentPage.module.scss';

export function PaymentPage() {
  const tg = useTelegram();

  if (!authService.isOpenedInTelegram()) {
    return <StartupNotTelegram />;
  }

  const MENU_DATA_MOCK: IMenu = {
    hasSubscription: true,
    subscriptionDate: new Date().toISOString(),
    alertsEnabled: false,
    inviteLink: 'https://google.com',
    supportLink: 'https://google.com',
  };

  const data = MENU_DATA_MOCK;

  return (
    <BaseLayout title="Подписка">
      <div className={styles.layout}>
        {(() => {
          if (data.hasSubscription && data.subscriptionDate) {
            return (
              <Typography align="center" variant="h5" color={theme.palette.success.main}>
                Активна до <br />
                {formatDate(data.subscriptionDate)}
              </Typography>
            );
          }
          return <Button variant="contained">оформить подписку</Button>;
        })()}
      </div>
    </BaseLayout>
  );
}
