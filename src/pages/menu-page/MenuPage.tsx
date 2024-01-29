import { Typography } from '@mui/material';
import { useGetUserMeta } from 'shared/hooks/useGetUserMeta';
import { authService } from 'shared/services/Auth.service';
import { BaseLayout } from 'ui/base-layout';
import { StartupNotTelegram } from 'ui/startup-not-telegram';
import { SupportLink } from 'ui/support-link';
import { Menu } from 'widgets/menu';

import styles from './MenuPage.module.scss';

export function MenuPage() {
  const { data, isLoading, error } = useGetUserMeta();

  if (!authService.isOpenedInTelegram()) {
    return <StartupNotTelegram />;
  }

  if (!!error) {
    return (
      <BaseLayout title="Меню">
        <Typography variant="h5">Произошла ошибка</Typography>
        <Typography>{error.message}</Typography>
      </BaseLayout>
    );
  }

  if (isLoading || !data) {
    return (
      <BaseLayout title="Меню">
        <Typography variant="h5">Загрузка...</Typography>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout title="Меню">
      <div className={styles.layout}>
        <Menu userMeta={data} />
        <SupportLink url={data.supportLink} className={styles.support_link} />
      </div>
    </BaseLayout>
  );
}
