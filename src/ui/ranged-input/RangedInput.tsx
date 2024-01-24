import { ReactNode } from 'react';
import { ClearButton } from 'ui/clear-button';
import { LabeledInput } from 'ui/labeled-input';

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
      Button={<ClearButton onClear={onClear} />}
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
