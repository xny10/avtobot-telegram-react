import { lazy } from 'react';

export const FiltersPageAsync = lazy(() =>
  import('./FiltersPage').then((promise) => ({
    default: promise.FiltersPage,
  }))
);
