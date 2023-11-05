import { Chip, Switch, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { IFilterShort } from 'shared/types';

import styles from './styles.module.scss';

type FilterCardProps = {
  filter: IFilterShort;
  index: number;
  buttonSlot?: ReactNode;
};

export function FilterCard({ filter, index, buttonSlot }: FilterCardProps) {
  return (
    <Link to={`${ROUTES.filter}/${filter.id}`} className={styles.card}>
      <div className={styles.header}>
        <Typography className={styles.title} component="div">
          <span className={styles.index}>{index + 1}</span>
          {filter.name}
        </Typography>
        {buttonSlot}
      </div>
      <div className={styles.variants}>
        {filter.variants.map((variant, i) => (
          <Chip
            key={i}
            label={
              <Typography>
                {variant.model}({variant.make})
              </Typography>
            }
          />
        ))}
      </div>
    </Link>
  );
}
