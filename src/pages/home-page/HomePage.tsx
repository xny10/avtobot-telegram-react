import { useTelegram } from 'shared/hooks/useTelegram';

export function HomePage() {
  const { tg } = useTelegram();

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      <div>window.Telegram.WebApp</div>
      <pre>{JSON.stringify(tg.initDataUnsafe, null, 2)}</pre>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}
