import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTelegram } from 'shared/hooks/useTelegram';

import { Router } from './router/Router';
import './styles/index.scss';

export function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    if (!tg.isExpanded) tg.expand();
  }, []);

  return (
    <BrowserRouter>
      <Router />;
    </BrowserRouter>
  );
}
