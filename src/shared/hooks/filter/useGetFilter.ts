import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { fetchCars, fetchFilterById } from 'shared/api';
import { ICarExpanded, IFilter } from 'shared/types';

type UseGetFilterParams = {
  filterId: number;
};

export function useGetFilter({ filterId }: UseGetFilterParams) {
  const filterQuery = useQuery<IFilter, AxiosError>(['filter', filterId], {
    queryFn: () => fetchFilterById(filterId),
  });

  // TODO: проверить как работает кэш на телефоне. Если плохо - сделать сохранение в localStorage и последующих hotswap. Для этого скорее всего надо будет добавить effect в FilterForm
  const carsQuery = useQuery<ICarExpanded[], AxiosError>('cars', fetchCars);

  return {
    filter: filterQuery.data,
    cars: carsQuery.data,
    isLoading: filterQuery.isLoading || carsQuery.isLoading,
    error: filterQuery.error || carsQuery.error,
  };
}
