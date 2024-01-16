import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchCities } from 'shared/api';

export function useCities() {
  const { data: cities, isLoading } = useQuery('cities', fetchCities);

  const citiesMap = useMemo(() => {
    //* map city ID to city Name
    const map: Record<number, string> = {};
    cities?.forEach((city) => {
      map[city.id] = city.name;
    });
    return map;
  }, [cities]);

  return { cities, citiesMap, isLoading };
}
