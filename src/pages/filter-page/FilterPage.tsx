import { filterMock } from 'shared/mocks/filter.mock';
import { BaseLayout } from 'ui/base-layout';
import { FilterForm } from 'widgets/filter-form';

export function FilterPage() {
  const filter = filterMock;

  return (
    <BaseLayout backLinkBehavior="previous_page" title={filter.name || 'Новый Фильтр'}>
      <FilterForm filter={filter} />
    </BaseLayout>
  );
}
