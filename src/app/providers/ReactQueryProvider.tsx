import { PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'shared/api';

type ReactQueryProviderProps = PropsWithChildren;

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
