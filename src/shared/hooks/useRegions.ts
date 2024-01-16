import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchRegions } from 'shared/api';

export function useRegions() {
  const { data: regions, isLoading } = useQuery('regions', fetchRegions);

  const regionsMap = useMemo(() => {
    //* map region ID to city Name
    const map: Record<number, string> = {};
    regions?.forEach((region) => {
      map[region.id] = region.name;
    });
    return map;
  }, [regions]);

  return { regions, regionsMap, isLoading };
}
