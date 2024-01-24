import { Typography } from '@mui/material';
import { SaveFilterButton } from 'features/filter';
import { useState } from 'react';
import { UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetFilter } from 'shared/hooks/filter/useGetFilter';
import { ICarExpanded, IFilterSerialized } from 'shared/types';
import { serializeFilter } from 'shared/utils/form.utils';
import { BaseLayout } from 'ui/base-layout';
import { FilterForm } from 'widgets/filter-form';

type SubmitButtonParams = {
  handleSubmit: UseFormHandleSubmit<IFilterSerialized>;
  formApi: UseFormReturn<IFilterSerialized>;
  cars: ICarExpanded[];
};

const renderSubmitButton = (params: SubmitButtonParams) => (
  <SaveFilterButton cars={params.cars} handleSubmit={params.handleSubmit} formApi={params.formApi} />
);

export function EditFilterPage() {
  const params = useParams<{ id: string }>();
  const [confirmExit, setConfirmExit] = useState(false);

  const { cars, filter, error, isLoading } = useGetFilter({
    filterId: +(params.id as string),
  });

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

        if (isLoading) {
          return <Typography variant="h5">Загрузка...</Typography>;
        }

        if (!filter) {
          return <Typography variant="h5">Фильтра с ID: {params.id} не существует</Typography>;
        }

        if (cars) {
          return (
            <FilterForm<IFilterSerialized>
              defaultValues={serializeFilter(filter, cars)}
              cars={cars}
              setConfirmExit={setConfirmExit}
              renderSubmitButton={renderSubmitButton}
            />
          );
        }
      })()}
    </BaseLayout>
  );
}
