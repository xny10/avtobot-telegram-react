import { lazy } from 'react';

export const MenuPageAsync = lazy(() =>
  import('./MenuPage').then((promise) => ({
    default: promise.MenuPage,
  }))
);
