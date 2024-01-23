import { Typography } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFilter } from 'shared/hooks/filter/useGetFilter';
import { BaseLayout } from 'ui/base-layout';
import { FilterForm } from 'widgets/filter-form';

export function FilterPage() {
  const params = useParams<{ id: string }>();
  const [confirmExit, setConfirmExit] = useState(false);

  const { cars, filter, error, isLoading } = useGetFilter(+(params.id as string));

  return (
    <BaseLayout confirmGoBack={confirmExit} backLinkBehavior="previous_page" title={filter?.name || ''}>
      {(() => {
        if (error) {
          return (
            <>
              <Typography variant="h5">Произошла ошибка!</Typography>
              <Typography>{error.message}</Typography>
            </>
          );
        }
        if (isLoading || !cars || !filter) {
          return <Typography variant="h5">Загрузка...</Typography>;
        }
        return <FilterForm filter={filter} cars={cars} setConfirmExit={setConfirmExit} />;
      })()}
    </BaseLayout>
  );
}
