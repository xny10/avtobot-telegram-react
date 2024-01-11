import { SaveFilter } from 'features/filter';
import { FormProvider, useForm } from 'react-hook-form';
import { useTelegram } from 'shared/hooks/useTelegram';
import { IFilter } from 'shared/types';
import { formatNumber } from 'shared/utils/format.utils';
import { RangeSelect } from 'ui/range-select';
import { RHFTextField } from 'ui/react-hook-form';

import { BrandModelField } from './BrandModelField';
import { FuelField } from './FuelField';
import { LocationField } from './LocationField';
import { MileageFields } from './MileageFields';
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

  const MANUFACTURE_YEAR_MOCK = [''];
  for (let i = new Date().getFullYear(); i > 1980; i--) {
    MANUFACTURE_YEAR_MOCK.push(i.toString());
  }

  const PRICE_MOCK = [''];
  for (let i = 200000; i <= 1200000; i += 200000) {
    PRICE_MOCK.push(i.toString());
  }
  for (let i = 1500000; i < 5000000; i += 500000) {
    PRICE_MOCK.push(i.toString());
  }
  for (let i = 5000000; i < 20000000; i += 1000000) {
    PRICE_MOCK.push(i.toString());
  }

  return (
    <FormProvider {...fields}>
      <form className={styles.form}>
        <RHFTextField control={control} name="name" label="Название" />
        <LocationField />
        <BrandModelField />
        <RangeSelect name="price" label="Цена" options={PRICE_MOCK} formatOption={(price) => formatNumber(+price)} />
        <RangeSelect name="manufactureYear" label="Год выпуска" options={MANUFACTURE_YEAR_MOCK} itemOrder="desc" />
        <MileageFields />
        <FuelField />
        <SaveFilter onSubmit={handleSubmit(onSubmit)} disabled={!formState.isDirty} />
      </form>
    </FormProvider>
  );
}
