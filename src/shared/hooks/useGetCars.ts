import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { fetchCars } from 'shared/api';
import { ICarExpanded } from 'shared/types';

export function useGetCars() {
  const carsQuery = useQuery<ICarExpanded[], AxiosError>('cars', fetchCars);

  return {
    cars: carsQuery.data,
    isLoading: carsQuery.isLoading,
    error: carsQuery.error,
  };
}
