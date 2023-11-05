import { Typography } from '@mui/material';
import { ReactNode } from 'react';

import styles from './styles.module.scss';

type LabeledInputProps = {
  Title: ReactNode;
  Button?: ReactNode;
  Content: ReactNode;
};

export function LabeledInput({ Title, Button, Content }: LabeledInputProps) {
  return (
    <div>
      <div className={styles.header}>
        {typeof Title === 'string' ? <Typography>{Title}</Typography> : Title}
        {Button}
      </div>
      {Content}
    </div>
  );
}
