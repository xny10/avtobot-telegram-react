import { animated, useTransition } from '@react-spring/web';
import { Fragment, PropsWithChildren, useId } from 'react';
import { createPortal } from 'react-dom';

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

  const stackId = useId();

  return (
    <>
      {createPortal(
        <Fragment>
          {transitions((style, open) => {
            return (
              open && (
                <animated.div style={style} className={styles.fixed_stack_item}>
                  {children}
                </animated.div>
              )
            );
          })}
        </Fragment>,
        document.body,
        stackId
      )}
    </>
  );
}
