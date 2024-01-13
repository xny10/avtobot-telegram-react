import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TextField } from '@mui/material';
import { animated, useTransition } from '@react-spring/web';
import { LabeledInput } from 'features/filter';
import { memo, useState } from 'react';
import { ICar } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';

import styles from './BrandModelSelect.module.scss';
import { BrandSelectStep } from './BrandSelectStep';
import { ClearAll } from './ClearAll';
import { SelectedList } from './SelectedList';

type BrandMakeSelectProps = {
  cars: ICar[];
};

export const BrandMakeSelect = memo(function BrandMakeSelect({ cars }: BrandMakeSelectProps) {
  const [open, setOpen] = useState(false);

  const transitions = useTransition(open, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(100%)' },
  });

  return (
    <div className={styles.root}>
      <div>
        <LabeledInput
          Title="Марки и модели авто"
          Button={<ClearAll />}
          Content={
            <div className={styles.open_button_wrapper} onClick={() => setOpen(true)}>
              <TextField
                className={styles.open_button}
                fullWidth
                label="Нажмите на поле для выбора"
                InputProps={{ endAdornment: <MoreHorizIcon /> }}
              />
            </div>
          }
        />
      </div>
      {transitions((style, open) => {
        return (
          open && (
            <animated.div style={style} className={styles.form}>
              <BaseLayout backLinkBehavior={() => setOpen(false)} title="Марки и модели">
                <BrandSelectStep cars={cars} />
              </BaseLayout>
            </animated.div>
          )
        );
      })}
      <SelectedList />
    </div>
  );
});
