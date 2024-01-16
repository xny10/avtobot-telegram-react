import { lazy } from 'react';

export const FilterPageAsync = lazy(() =>
  import('./FilterPage').then((promise) => ({
    default: promise.FilterPage,
  }))
);
