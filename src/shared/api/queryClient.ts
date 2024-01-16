import axios from 'axios';
import { QueryClient } from 'react-query';
import { API_URL } from 'shared/config/consts';

export const queryClient = new QueryClient();

export const api = axios.create({
  baseURL: API_URL,
});
