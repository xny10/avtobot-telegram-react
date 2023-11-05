import { filterMock } from 'shared/mocks/filter.mock';
import { BaseLayout } from 'ui/base-layout';

export function FilterPage() {
  const filter = filterMock;

  return (
    <BaseLayout backLinkBehavior="previous_page" title={filter.name || 'Фильтр'}>
      Страница фильтры
    </BaseLayout>
  );
}
