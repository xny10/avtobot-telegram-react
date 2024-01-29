import axios from 'axios';
import { QueryCache, QueryClient } from 'react-query';
import { API_URL, CACHE_STALE_TIME } from 'shared/config/consts';
import { authService } from 'shared/services/Auth.service';

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

api.interceptors.request.use(
  (config) => {
    if (config.baseURL === API_URL && !config.headers.Authorization) {
      const token = authService.getToken();

      if (token) {
        config.headers.Authorization = token;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
