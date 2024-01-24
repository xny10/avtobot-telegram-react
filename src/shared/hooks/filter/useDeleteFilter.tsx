import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { deleteFilter } from 'shared/api';
import { IFilter } from 'shared/types';

export function useDeleteFilter() {
  const client = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: deleteFilter,
  });

  const onDelete = async (filterId: number, filterName: string) => {
    let success = false;
    try {
      await mutateAsync(filterId);
      client.setQueryData<IFilter[]>('filters', (filters) =>
        (filters || []).filter((filter) => filter.id !== filterId)
      );
      toast.success(`Фильтр "${filterName}" удалён`);
      success = true;
    } catch (e) {
      toast.success('Не удалось удалить фильтр');
    }

    return { success };
  };

  return [onDelete, rest] as const;
}
