import { Typography } from '@mui/material';
import { ReactNode } from 'react';

import styles from './styles.module.scss';

type RangedInputProps = {
  title: string;
  onClear: () => void;
  leftInput: ReactNode;
  rightInput: ReactNode;
};

export function RangedInput({ title, onClear, leftInput, rightInput }: RangedInputProps) {
  return (
    <div>
      <div className={styles.header}>
        <Typography>{title}</Typography>
        <Typography className={styles.clear_button} onClick={onClear}>
          Очистить всё
        </Typography>
      </div>
      <div className={styles.double_field}>
        {leftInput}
        <div className={styles.double_field_divider} />
        {rightInput}
      </div>
    </div>
  );
}
