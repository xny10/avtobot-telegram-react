import { Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { RHFTextField } from 'ui/react-hook-form/rhf-text-field';

import styles from './styles.module.scss';

export function PriceFields() {
  const { control } = useFormContext();

  return (
    <div>
      <Typography>Цена</Typography>
      <div className={styles.double_field}>
        <RHFTextField control={control} name="price.0" placeholder="от" type="number" />
        <div className={styles.double_field_divider} />
        <RHFTextField control={control} name="price.1" placeholder="до" type="number" />
      </div>
    </div>
  );
}
