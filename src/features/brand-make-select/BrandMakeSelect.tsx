import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TextField } from '@mui/material';
import { LabeledInput } from 'features/filter';
import { memo, useState } from 'react';
import { ICar } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';
import { OpenStacked } from 'ui/open-stacked';

import { AllBrandsSelectedList } from './AllBrandsSelectedList';
import styles from './BrandModelSelect.module.scss';
import { BrandSelectStep } from './BrandSelectStep';
import { ClearAll } from './ClearAll';
import { SelectedList } from './SelectedList';

type BrandMakeSelectProps = {
  cars: ICar[];
};

export const BrandMakeSelect = memo(function BrandMakeSelect({ cars }: BrandMakeSelectProps) {
  const [open, setOpen] = useState(false);

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
      <OpenStacked open={open}>
        <BaseLayout backLinkBehavior={() => setOpen(false)} title="Марки и модели">
          <BrandSelectStep cars={cars} />
        </BaseLayout>
      </OpenStacked>
      <SelectedList EverythingSelectedList={<AllBrandsSelectedList cars={cars} />} />
    </div>
  );
});
