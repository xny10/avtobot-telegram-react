import { Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { fetchFilters } from 'shared/api';
import { IFilter } from 'shared/types';
import { FiltersList } from 'widgets/filters-list';

import { Layout } from './Layout';

export function HomePage() {
  const userId = 0;

  const { data, isLoading, error } = useQuery<IFilter[], AxiosError>('filters', {
    queryFn: () => fetchFilters({ userId }),
  });

  if (error) {
    return (
      <Layout>
        <Typography variant="h5">Произошла ошибка!</Typography>
        <Typography>{error.message}</Typography>
      </Layout>
    );
  }

  if (isLoading || !data) {
    return (
      <Layout>
        <Typography variant="h5">Загрузка...</Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <FiltersList filters={data} />
    </Layout>
  );
}
