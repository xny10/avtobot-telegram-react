import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './styles.module.scss';

type DisabledAreaProps = PropsWithChildren<{
  disabled: boolean;
}>;

export function DisabledArea({ children, disabled }: DisabledAreaProps) {
  return <div className={classNames({ [styles.disabled]: disabled })}>{children}</div>;
}
