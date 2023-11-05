import { Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { IFilter } from 'shared/types';
import { RHFTextField } from 'ui/react-hook-form/rhf-text-field';

import { FuelField } from './FuelField';
import { ManufactureDateFields } from './ManufactureDateFields';
import { MileageFields } from './MileageFields';
import { PriceFields } from './PriceFields';
import styles from './styles.module.scss';

type FilterFormProps = {
  defaultValues: IFilter;
};

export function FilterForm({ defaultValues }: FilterFormProps) {
  const fields = useForm({
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { control, handleSubmit } = fields;

  const onSubmit = (values: IFilter) => {
    console.log('values', values);
  };

  return (
    <FormProvider {...fields}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField control={control} name="name" label="Название" />
        <PriceFields />
        <ManufactureDateFields />
        <MileageFields />
        <FuelField />
        <Button variant="contained" type="submit">
          save
        </Button>
      </form>
    </FormProvider>
  );
}
