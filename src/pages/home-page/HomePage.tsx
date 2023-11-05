import { useEffect } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';
import { filtersShortMock } from 'shared/mocks/filtersShort.mock';
import { BaseLayout } from 'ui/base-layout';
import { FiltersList } from 'widgets/filters-list';

export function HomePage() {
  const { tg } = useTelegram();

  useEffect(() => {
    console.log(tg);
  }, []);

  return (
    <BaseLayout title="Мои фильтры">
      <FiltersList filters={filtersShortMock} />
    </BaseLayout>
  );
}
