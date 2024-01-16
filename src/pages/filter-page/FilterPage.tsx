import { Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchManufacturers } from 'shared/api';
import { filterMock } from 'shared/mocks/filter.mock';
import { BaseLayout } from 'ui/base-layout';
import { FilterForm } from 'widgets/filter-form';

export function FilterPage() {
  const [confirmExit, setConfirmExit] = useState(false);
  const filter = filterMock;

  // TODO: проверить как работает кэш на телефоне. Если плохо - сделать сохранение в localStorage и последующих hotswap. Для этого скорее всего надо будет добавить effect в FilterForm
  const { data: manufacturers, isLoading, isError } = useQuery('manufacturers', fetchManufacturers);

  return (
    <BaseLayout confirmGoBack={confirmExit} backLinkBehavior="previous_page" title={filter.name || 'Новый Фильтр'}>
      {isError && <Typography variant="h5">Произошла ошибка!</Typography>}
      {isLoading && <Typography variant="h5">Загружаем фильтр...</Typography>}
      {manufacturers && <FilterForm filter={filter} manufacturers={manufacturers} setConfirmExit={setConfirmExit} />}
    </BaseLayout>
  );
}
