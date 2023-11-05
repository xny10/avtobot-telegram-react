import { FilterCard } from 'entities/filter';
import { IFilterShort } from 'shared/types';

import styles from './styles.module.scss';

type FiltersListProps = {
  filters: IFilterShort[];
};

export function FiltersList({ filters }: FiltersListProps) {
  return (
    <div className={styles.list}>
      {filters.map((filter, i) => (
        <FilterCard key={filter.id} filter={filter} index={i} />
      ))}
    </div>
  );
}
