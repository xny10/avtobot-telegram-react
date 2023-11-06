import { Chip, Switch, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { IFilterShort } from 'shared/types';

import styles from './styles.module.scss';

type FilterCardProps = {
  filter: IFilterShort;
  index: number;
  Buttons?: ReactNode;
};

export function FilterCard({ filter, index, Buttons }: FilterCardProps) {
  return (
    <Link to={`${ROUTES.filter}/${filter.id}`} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.primary}>
          <Typography className={styles.index}>{index + 1}</Typography>
          <div>
            <Typography className={styles.title} component="div">
              {filter.name}
            </Typography>
            <Typography className={styles.years}>
              {filter.manufactureYear[0]} - {filter.manufactureYear[1]}
            </Typography>
          </div>
        </div>
        {Buttons}
      </div>
      <div className={styles.variants}>
        {filter.variants.map((variant, i) => (
          <Chip
            key={i}
            label={
              <Typography>
                {variant.brand}({variant.model})
              </Typography>
            }
          />
        ))}
      </div>
    </Link>
  );
}
