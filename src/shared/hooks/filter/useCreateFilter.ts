import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { createFilter } from 'shared/api';
import { CreateFilterDto } from 'shared/dto/CreateFilter.dto';
import { IFilter } from 'shared/types';

import { useTelegram } from '../useTelegram';

export function useCreateFilter() {
  const { tg } = useTelegram();
  const client = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: createFilter,
  });

  const onCreate = async (dto: CreateFilterDto) => {
    let success = false;
    try {
      const createdFilter = await mutateAsync(dto);
      tg.HapticFeedback.impactOccurred('rigid');
      client.setQueryData<IFilter[]>('filters', (filters) => [...(filters || []), createdFilter]);
      toast.success('Фильтр создан');
      success = true;
    } catch (e) {
      toast.error('Не удалось создать');
    }

    return { success };
  };

  return [onCreate, rest] as const;
}
