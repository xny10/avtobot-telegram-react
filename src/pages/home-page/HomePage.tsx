import { useTelegram } from 'shared/hooks/useTelegram';
import { BaseLayout } from 'ui/base-layout';

export function HomePage() {
  const { tg } = useTelegram();

  const onClose = () => {
    tg.close();
  };

  return (
    <BaseLayout title="Мои фильтры">
      <div>window.Telegram.WebApp</div>
      <pre>{JSON.stringify(tg.initDataUnsafe, null, 2)}</pre>
      <button onClick={onClose}>Закрыть</button>
    </BaseLayout>
  );
}
