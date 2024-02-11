import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { fetchUserMeta } from 'shared/api';
import { authService } from 'shared/services/Auth.service';
import { IUserMeta } from 'shared/types';

import { useTelegram } from '../useTelegram';

export function useUserMeta() {
  const { user } = useTelegram();

  const queryResult = useQuery<IUserMeta, AxiosError>('user', {
    queryFn: () => fetchUserMeta(user!.id),
    enabled: authService.isOpenedInTelegram() && !!user,
  });

  return queryResult;
}
