import axios from 'axios';
import { QueryCache, QueryClient } from 'react-query';
import { API_URL, CACHE_STALE_TIME } from 'shared/config/consts';

export const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      staleTime: CACHE_STALE_TIME,
    },
  },
});

export const api = axios.create({
  baseURL: API_URL,
});
