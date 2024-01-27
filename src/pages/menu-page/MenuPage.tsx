import { Menu } from 'entities/menu';
import { useTelegram } from 'shared/hooks/useTelegram';
import { BaseLayout } from 'ui/base-layout';
import { StartupNotTelegram } from 'ui/startup-not-telegram';
import { SupportLink } from 'ui/support-link';

import styles from './MenuPage.module.scss';

export function MenuPage() {
  const tg = useTelegram();
  const userId = tg.user?.id;

  if (!userId) {
    return <StartupNotTelegram />;
  }

  return (
    <BaseLayout title="Меню">
      <div className={styles.layout}>
        <Menu />
        <SupportLink url={'https://google.com'} className={styles.support_link} />
      </div>
    </BaseLayout>
  );
}
