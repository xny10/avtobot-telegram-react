import { useMutation, useQueryClient } from 'react-query';
import { queryClient, toggleFilter, toggleNotifications } from 'shared/api';
import { IUserMeta } from 'shared/types';

import { useTelegram } from '../useTelegram';

export function useToggleNotifications() {
  const { tg } = useTelegram();
  const client = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: toggleNotifications,
  });

  const onToggle = async (active: boolean) => {
    let success = false;
    const user = queryClient.getQueryData<IUserMeta>('user');
    if (!user) {
      success = false;
      return { success };
    }

    try {
      await toggleFilter({
        id: user.id,
        isActive: active,
      });
      tg.HapticFeedback.impactOccurred('rigid');
      client.setQueryData<IUserMeta | undefined>('user', (userMeta) => {
        if (!userMeta) return;
        return {
          ...userMeta,
          isReceivingActive: active,
        };
      });
      success = true;
    } catch (e) {}

    return { success };
  };

  return [onToggle, rest] as const;
}
