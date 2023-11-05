import { useEffect } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';
import { BaseLayout } from 'ui/base-layout';

export function HomePage() {
  const { tg } = useTelegram();

  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    console.log(tg);
  }, []);

  return (
    <BaseLayout title="Мои фильтры">
      <button onClick={onClose}>Закрыть</button>
    </BaseLayout>
  );
}
