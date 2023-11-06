import { SaveFilter } from 'features/filter';
import { FormProvider, useForm } from 'react-hook-form';
import { useTelegram } from 'shared/hooks/useTelegram';
import { IFilter } from 'shared/types';
import { RHFTextField } from 'ui/react-hook-form';

import { BrandModelField } from './BrandModelField';
import { FuelField } from './FuelField';
import { LocationField } from './LocationField';
import { ManufactureDateFields } from './ManufactureDateFields';
import { MileageFields } from './MileageFields';
import { PriceFields } from './PriceFields';
import { ISerializedFilter } from './model';
import styles from './styles.module.scss';
import { serializeFilterToRHF } from './utils/serializeFilterToRHF';

type FilterFormProps = {
  filter: IFilter;
};

export function FilterForm({ filter }: FilterFormProps) {
  const { tg } = useTelegram();

  const fields = useForm({
    defaultValues: serializeFilterToRHF(filter),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { control, handleSubmit, formState } = fields;

  const onSubmit = (values: ISerializedFilter) => {
    tg.HapticFeedback.impactOccurred('rigid');
    console.log('values', values);
  };

  return (
    <FormProvider {...fields}>
      <form className={styles.form}>
        <RHFTextField control={control} name="name" label="Название" />
        <BrandModelField />
        <LocationField />
        <PriceFields />
        <ManufactureDateFields />
        <MileageFields />
        <FuelField />
        <SaveFilter onSubmit={handleSubmit(onSubmit)} disabled={!formState.isDirty} />
      </form>
    </FormProvider>
  );
}
