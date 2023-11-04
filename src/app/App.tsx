import { useEffect } from 'react';

import { TelegramUserProvider } from './providers/TelegramUserProvider';
import './styles/index.scss';

const tg = window.Telegram.WebApp;
console.log('window.Telegram.WebApp', window.Telegram.WebApp);
export function App() {
  useEffect(() => {
    tg.ready();

    if (!tg.isExpanded) tg.expand();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <TelegramUserProvider>
      <div>window.Telegram.WebApp</div>
      <pre>{JSON.stringify(tg.initDataUnsafe, null, 2)}</pre>
      <button onClick={onClose}>Закрыть</button>
      <div>
        username: <div className="username"></div>
      </div>
    </TelegramUserProvider>
  );
}
