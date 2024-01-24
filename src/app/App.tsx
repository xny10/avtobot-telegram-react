import { StyledEngineProvider } from '@mui/material';
import { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { useTelegram } from 'shared/hooks/useTelegram';
import { BaseLayout } from 'ui/base-layout';

import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { Router } from './router/Router';
import './styles/index.scss';

export function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    if (!tg.isExpanded) tg.expand();
    tg.HapticFeedback.impactOccurred('soft');
  }, []);

  return (
    <ReactQueryProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <BrowserRouter>
            <Suspense fallback={<BaseLayout title="" />}>
              <Router />
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
      <Toaster />
    </ReactQueryProvider>
  );
}
