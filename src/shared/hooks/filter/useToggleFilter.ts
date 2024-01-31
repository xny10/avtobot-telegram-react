import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { toggleFilter } from 'shared/api';
import { IFilter } from 'shared/types';

import { useTelegram } from '../useTelegram';

export function useToggleFilter() {
  const { tg } = useTelegram();
  const client = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: toggleFilter,
  });

  const onToggle = async (filterId: number, active: boolean) => {
    let success = false;
    try {
      await mutateAsync({
        id: filterId,
        isActive: active,
      });
      tg.HapticFeedback.impactOccurred('rigid');
      client.setQueryData<IFilter[]>('filters', (filters) =>
        (filters || []).map((filter) => {
          if (filter.id !== filterId) return filter;
          return {
            ...filter,
            isActive: active,
          };
        })
      );
      toast.success(`Фильтр ${active ? 'включён' : 'выключен'} `);
      success = true;
    } catch (e) {
      toast.error(`Не удалось ${active ? 'включить' : 'выключить'}`);
    }

    return { success };
  };

  return [onToggle, rest] as const;
}
