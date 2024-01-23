import { useMutation } from 'react-query';
import { updateFilter } from 'shared/api';

export function useUpdateFilter() {
  const { mutateAsync, ...rest } = useMutation({
    mutationFn: updateFilter,
  });

  return [mutateAsync, rest] as const;
}
