import { Chip, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { IFilter } from 'shared/types';

import { HeaderPrimary } from './HeaderPrimary';
import styles from './styles.module.scss';

type FilterCardProps = {
  filter: IFilter;
  index: number;
  Buttons?: ReactNode;
};

export function FilterCard({ filter, index, Buttons }: FilterCardProps) {
  return (
    <Link to={`${ROUTES.editFilter}/${filter.id}`} className={styles.card}>
      <div className={styles.header}>
        <HeaderPrimary index={index} title={filter.name} manufactureYear={filter.manufactureYear} />
        {Buttons}
      </div>
      <div className={styles.variants}>
        {filter.carChoices.map((car) => (
          <Chip key={car.id} size="small" label={`${car.name}${car.models.map((make) => make.name).join(', ')}`} />
        ))}
      </div>
    </Link>
  );
}
