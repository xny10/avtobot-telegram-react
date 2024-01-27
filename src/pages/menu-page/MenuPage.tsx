import { useTelegram } from 'shared/hooks/useTelegram';
import { IMenu } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';
import { StartupNotTelegram } from 'ui/startup-not-telegram';
import { SupportLink } from 'ui/support-link';
import { Menu } from 'widgets/menu';

import styles from './MenuPage.module.scss';

export function MenuPage() {
  const tg = useTelegram();
  const userId = tg.user?.id;

  if (!userId) {
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
    <BaseLayout title="Меню">
      <div className={styles.layout}>
        <Menu menu={data} />
        <SupportLink url={data.supportLink} className={styles.support_link} />
      </div>
    </BaseLayout>
  );
}
