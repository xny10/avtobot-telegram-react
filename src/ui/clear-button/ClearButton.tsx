import { Typography } from '@mui/material';
import { AnyFunction } from 'shared/types';

import styles from './ClearButton.module.scss';

type ClearButtonProps = {
  onClear: AnyFunction;
};

export function ClearButton({ onClear }: ClearButtonProps) {
  return (
    <Typography className={styles.clear_button} onClick={onClear}>
      Очистить
    </Typography>
  );
}
