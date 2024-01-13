import { animated, useTransition } from '@react-spring/web';
import { PropsWithChildren } from 'react';

import styles from './OpenStacked.module.scss';

type OpenStackedProps = PropsWithChildren<{
  open: boolean;
}>;

export function OpenStacked({ open, children }: OpenStackedProps) {
  const transitions = useTransition(open, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(100%)' },
  });

  return (
    <>
      {transitions((style, open) => {
        return (
          open && (
            <animated.div style={style} className={styles.fixed_stack_item}>
              {children}
            </animated.div>
          )
        );
      })}
    </>
  );
}
