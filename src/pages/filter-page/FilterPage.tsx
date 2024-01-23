import { Typography } from '@mui/material';
import { SaveFilterButton } from 'features/save-filter-button';
import { useState } from 'react';
import { UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetFilter } from 'shared/hooks/filter/useGetFilter';
import { ICarExpanded, IFilterSerialized } from 'shared/types';
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

export function FilterPage() {
  const params = useParams<{ id: string }>();
  const [confirmExit, setConfirmExit] = useState(false);

  const { cars, filter, error, isLoading } = useGetFilter(+(params.id as string));

  return (
    <BaseLayout confirmGoBack={confirmExit} backLinkBehavior="previous_page" title={filter?.name || ''}>
      {error && (
        <>
          <Typography variant="h5">Произошла ошибка!</Typography>
          <Typography>{error.message}</Typography>
        </>
      )}
      {isLoading && <Typography variant="h5">Загрузка...</Typography>}
      {cars && filter && (
        <FilterForm
          filter={filter}
          cars={cars}
          setConfirmExit={setConfirmExit}
          renderSubmitButton={renderSubmitButton}
        />
      )}
    </BaseLayout>
  );
}
