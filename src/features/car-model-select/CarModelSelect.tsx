import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TextField } from '@mui/material';
import { LabeledInput } from 'features/filter';
import { memo } from 'react';
import { useDialog } from 'shared/hooks/useDialog';
import { ICar } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';
import { OpenStacked } from 'ui/open-stacked';

import { AllCarsSelectedList } from './AllCarsSelectedList';
import styles from './CarModelSelect.module.scss';
import { CarSelect } from './CarSelect';
import { ClearAll } from './ClearAll';
import { SelectedList } from './SelectedList';

type CarModelSelectProps = {
  cars: ICar[];
};

export const CarModelSelect = memo(function CarModelSelect({ cars }: CarModelSelectProps) {
  const { open, onOpen, onClose } = useDialog();

  return (
    <div className={styles.root}>
      <div>
        <LabeledInput
          Title="Марки и модели авто"
          Button={<ClearAll />}
          Content={
            <div className={styles.open_button_wrapper} onClick={onOpen}>
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
      <OpenStacked open={open}>
        <BaseLayout backLinkBehavior={onClose} title="Марки и модели">
          <CarSelect cars={cars} />
        </BaseLayout>
      </OpenStacked>
      <SelectedList EverythingSelectedList={<AllCarsSelectedList cars={cars} />} />
    </div>
  );
});
