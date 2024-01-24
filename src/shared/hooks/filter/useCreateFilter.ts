import { useMutation } from 'react-query';
import { createFilter } from 'shared/api';

export function useCreateFilter() {
  const { mutateAsync, ...rest } = useMutation({
    mutationFn: createFilter,
  });

  return [mutateAsync, rest] as const;
}
