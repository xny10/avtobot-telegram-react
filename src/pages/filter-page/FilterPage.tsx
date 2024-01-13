import { useState } from 'react';
import { filterMock } from 'shared/mocks/filter.mock';
import { BaseLayout } from 'ui/base-layout';
import { FilterForm } from 'widgets/filter-form';

export function FilterPage() {
  const [confirmExit, setConfirmExit] = useState(false);
  const filter = filterMock;

  return (
    <BaseLayout confirmGoBack={confirmExit} backLinkBehavior="previous_page" title={filter.name || 'Новый Фильтр'}>
      <FilterForm filter={filter} setConfirmExit={setConfirmExit} />
    </BaseLayout>
  );
}
