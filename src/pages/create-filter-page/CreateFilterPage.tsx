import { Typography } from '@mui/material';
import { CreateFilterButton } from 'features/filter';
import { useState } from 'react';
import { useGetCars } from 'shared/hooks/useGetCars';
import { useTelegram } from 'shared/hooks/useTelegram';
import { useUserMeta } from 'shared/hooks/user/useUserMeta';
import { authService } from 'shared/services/Auth.service';
import { IFilterCreateSerialized } from 'shared/types';
import { createEmptyFilter } from 'shared/utils/filter.utils';
import { serializeFilterCreate } from 'shared/utils/form.utils';
import { BaseLayout } from 'ui/base-layout';
import { StartupNotTelegram } from 'ui/startup-not-telegram';
import { FilterForm, SubmitButtonParams } from 'widgets/filter-form';

const renderCreateButton = (params: SubmitButtonParams<IFilterCreateSerialized>) => (
  <CreateFilterButton cars={params.cars} handleSubmit={params.handleSubmit} formApi={params.formApi} />
);

export function CreateFilterPage() {
  const { data: userMeta } = useUserMeta();

  const [confirmExit, setConfirmExit] = useState(false);

  const { cars, isLoading, error } = useGetCars();

  if (!authService.isOpenedInTelegram() || !userMeta) {
    return <StartupNotTelegram />;
  }

  return (
    <BaseLayout confirmGoBack={confirmExit} title="Создать фильтр">
      {(() => {
        if (error) {
          return <Typography variant="h5">Произошла ошибка!</Typography>;
        }
        if (isLoading) {
          return <Typography variant="h5">Загрузка...</Typography>;
        }
        if (!cars) {
          return <Typography variant="h5">Не удалось загрузить список машин</Typography>;
        }

        return (
          <FilterForm<IFilterCreateSerialized>
            defaultValues={serializeFilterCreate(createEmptyFilter(userMeta.id), cars)}
            cars={cars}
            setConfirmExit={setConfirmExit}
            renderSubmitButton={renderCreateButton}
          />
        );
      })()}
    </BaseLayout>
  );
}
