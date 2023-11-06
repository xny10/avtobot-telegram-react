import { Typography } from '@mui/material';

import styles from './styles.module.scss';

type CardHeaderProps = {
  index: number;
  title: string;
  manufactureYear: [string, string];
};

export function HeaderPrimary({ index, title, manufactureYear }: CardHeaderProps) {
  return (
    <div className={styles.primary}>
      <Typography className={styles.index}>{index + 1}</Typography>
      <div>
        <Typography className={styles.title} component="div">
          {title}
        </Typography>
        <Typography className={styles.years}>
          {manufactureYear[0]} - {manufactureYear[1]}
        </Typography>
      </div>
    </div>
  );
}
