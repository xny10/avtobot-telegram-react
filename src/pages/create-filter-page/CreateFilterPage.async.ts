import { lazy } from 'react';

export const CreateFilterPageAsync = lazy(() =>
  import('./CreateFilterPage').then((promise) => ({
    default: promise.CreateFilterPage,
  }))
);
