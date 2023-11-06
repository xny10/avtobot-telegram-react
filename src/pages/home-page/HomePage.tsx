import { filtersShortMock } from 'shared/mocks/filtersShort.mock';
import { BaseLayout } from 'ui/base-layout';
import { FiltersList } from 'widgets/filters-list';

export function HomePage() {
  return (
    <BaseLayout title="Мои фильтры">
      <FiltersList filters={filtersShortMock} />
    </BaseLayout>
  );
}
