import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { fetchCars } from 'shared/api';
import { ICarExpanded } from 'shared/types';

type UseGetCarsParams = {
  lazy?: boolean;
};

export function useGetCars(params?: UseGetCarsParams) {
  const carsQuery = useQuery<ICarExpanded[], AxiosError>('cars', fetchCars, {
    enabled: !params?.lazy,
  });

  return {
    cars: carsQuery.data,
    isLoading: carsQuery.isLoading,
    error: carsQuery.error,
    fetchCars: carsQuery.refetch,
  };
}
