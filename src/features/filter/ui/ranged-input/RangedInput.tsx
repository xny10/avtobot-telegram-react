import { Typography } from '@mui/material';
import { ReactNode } from 'react';

import { LabeledInput } from '../labeled-input';
import styles from './styles.module.scss';

type RangedInputProps = {
  title: string;
  onClear: () => void;
  LeftInput: ReactNode;
  RightInput: ReactNode;
};

export function RangedInput({ title, onClear, LeftInput, RightInput }: RangedInputProps) {
  return (
    <LabeledInput
      Title={title}
      Button={
        <Typography className={styles.clear_button} onClick={onClear}>
          Очистить всё
        </Typography>
      }
      Content={
        <div className={styles.double_field}>
          {LeftInput}
          <div className={styles.double_field_divider} />
          {RightInput}
        </div>
      }
    />
  );
}
