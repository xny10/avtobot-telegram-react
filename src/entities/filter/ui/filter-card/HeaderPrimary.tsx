import { Typography } from '@mui/material';
import { IRangeTuple } from 'shared/types';

import styles from './styles.module.scss';

type CardHeaderProps = {
  index: number;
  title: string;
  manufactureYear: IRangeTuple;
};

export function HeaderPrimary({ index, title, manufactureYear }: CardHeaderProps) {
  return (
    <div className={styles.primary}>
      <Typography className={styles.index}>{index + 1}</Typography>
      <div>
        <Typography className={styles.title} component="div">
          {title}
        </Typography>
        {(manufactureYear[0] || manufactureYear[1]) && (
          <Typography className={styles.years}>
            {(() => {
              if (!manufactureYear[0]) return `до ${manufactureYear[1]} года`;
              if (!manufactureYear[1]) return `от ${manufactureYear[0]} года`;
              return `${manufactureYear[0]} г. - ${manufactureYear[1]} г.`;
            })()}
          </Typography>
        )}
      </div>
    </div>
  );
}
