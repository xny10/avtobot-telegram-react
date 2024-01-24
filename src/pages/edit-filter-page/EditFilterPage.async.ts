import { lazy } from 'react';

export const EditFilterPageAsync = lazy(() =>
  import('./EditFilterPage').then((promise) => ({
    default: promise.EditFilterPage,
  }))
);
