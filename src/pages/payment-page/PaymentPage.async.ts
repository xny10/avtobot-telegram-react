import { lazy } from 'react';

export const PaymentPageAsync = lazy(() =>
  import('./PaymentPage').then((promise) => ({
    default: promise.PaymentPage,
  }))
);
