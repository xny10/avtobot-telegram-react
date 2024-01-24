import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { createFilter } from 'shared/api';
import { CopyFilterDto } from 'shared/dto/CopyFilter.dto';
import { IFilter } from 'shared/types';

import { useTelegram } from '../useTelegram';

export function useCopyFilter() {
  const { tg } = useTelegram();
  const client = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: createFilter,
  });

  const onCreate = async (dto: CopyFilterDto) => {
    let success = false;
    try {
      const createdFilter = await createFilter(dto);
      tg.HapticFeedback.impactOccurred('rigid');
      client.setQueryData<IFilter[]>('filters', (filters) => [...(filters || []), createdFilter]);
      toast.success('Фильтр скопирован');
      success = true;
    } catch (e) {
      toast.success('Не удалось скопировать');
    }

    return { success };
  };

  return [onCreate, rest] as const;
}
