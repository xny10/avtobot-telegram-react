import { Chip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { IFilterShort } from 'shared/types';

import styles from './styles.module.scss';

type FilterCardProps = {
  filter: IFilterShort;
  index: number;
};

export function FilterCard({ filter, index }: FilterCardProps) {
  return (
    <Link to={`${ROUTES.filter}/${filter.id}`} className={styles.card}>
      <Typography className={styles.title} component="div">
        <span className={styles.index}>{index + 1}</span>
        {filter.name}
      </Typography>
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
    </Link>
  );
}
