import { SaveFilter } from 'features/filter';
import { FormProvider, useForm } from 'react-hook-form';
import { IFilter } from 'shared/types';
import { RHFTextField } from 'ui/react-hook-form';

import { FuelField } from './FuelField';
import { LocationField } from './LocationField';
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
      <form className={styles.form}>
        <RHFTextField control={control} name="name" label="Название" />
        <LocationField />
        <PriceFields />
        <ManufactureDateFields />
        <MileageFields />
        <FuelField />
        <SaveFilter onSubmit={handleSubmit(onSubmit)} />
      </form>
    </FormProvider>
  );
}
