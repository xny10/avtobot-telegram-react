import { lazy } from 'react';

export const HomePageAsync = lazy(() =>
  import('./HomePage').then((promise) => ({
    default: promise.HomePage,
  }))
);
