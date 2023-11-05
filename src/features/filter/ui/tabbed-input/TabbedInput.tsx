import { Typography } from '@mui/material';
import { ReactNode } from 'react';

import { LabeledInput } from '../labeled-input';
import styles from './styles.module.scss';

type IInputVariant = {
  tabKey: string;
  title: string;
  Input: ReactNode;
};

type TabbedInputProps = {
  activeTabKey: string;
  variants: IInputVariant[];
  onClear: () => void;
  setActiveTabKey: (tabKey: string) => void;
};

export function TabbedInput({ activeTabKey, variants, setActiveTabKey, onClear }: TabbedInputProps) {
  const activeVariant = variants.find((variant) => variant.tabKey === activeTabKey);
  if (!activeVariant) return null;

  return (
    <LabeledInput
      Title={
        <Typography component="div" className={styles.title}>
          {variants.map((variant) => (
            <span
              key={variant.tabKey}
              onClick={() => setActiveTabKey(variant.tabKey)}
              className={variant.tabKey === activeTabKey ? styles.active_title : undefined}
            >
              {variant.title}
            </span>
          ))}
        </Typography>
      }
      Button={
        <Typography className={styles.clear_button} onClick={onClear}>
          Очистить всё
        </Typography>
      }
      Content={activeVariant.Input}
    />
  );
}