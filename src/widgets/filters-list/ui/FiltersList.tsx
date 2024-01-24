import { Button } from '@mui/material';
import { FilterCard } from 'entities/filter';
import { CopyFilter, DeleteFilter, SwitchFilter } from 'features/filter';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { IFilter } from 'shared/types';

import styles from './styles.module.scss';

type FiltersListProps = {
  filters: IFilter[];
};

export function FiltersList({ filters }: FiltersListProps) {
  const navigate = useNavigate();

  const onCreateNewFilter = () => {
    navigate(ROUTES.createFilter);
  };

  return (
    <div className={styles.layout}>
      <Button variant="outlined" onClick={onCreateNewFilter}>
        Создать новый
      </Button>
      <div className={styles.list}>
        {filters.map((filter, i) => (
          <FilterCard
            key={filter.id}
            filter={filter}
            index={i}
            Buttons={
              <div>
                <SwitchFilter filterId={filter.id} isActive={filter.isActive} />
                <CopyFilter filterId={filter.id} />
                <DeleteFilter filterId={filter.id} />
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
