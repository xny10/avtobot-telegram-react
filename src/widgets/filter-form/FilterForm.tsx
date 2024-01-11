import { SaveFilter } from 'features/filter';
import { FormProvider, useForm } from 'react-hook-form';
import { useTelegram } from 'shared/hooks/useTelegram';
import { IFilter } from 'shared/types';
import { formatNumber } from 'shared/utils/format.utils';
import { RangeSelect } from 'ui/range-select';
import { RHFTextField } from 'ui/react-hook-form';

import { BrandModelField } from './BrandModelField';
import { EngineVolumeSelect } from './EngineVolumeSelect';
import { FuelField } from './FuelField';
import { LocationField } from './LocationField';
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

  const MILEAGE_MOCK = [''];
  for (let i = 10000; i < 100000; i += 10000) {
    MILEAGE_MOCK.push(i.toString());
  }
  MILEAGE_MOCK.push('150000', '200000', '250000', '300000');

  const ENGINE_VOLUME_MOCK = [''];
  for (let i = 10; i < 60; i += 1) {
    ENGINE_VOLUME_MOCK.push((i / 10).toString());
  }

  const ENGINE_POWER_MOCK = [''];
  for (let i = 100; i < 1600; i += 25) {
    ENGINE_POWER_MOCK.push(i.toString());
  }

  return (
    <FormProvider {...fields}>
      <form className={styles.form}>
        <RHFTextField control={control} name="name" label="Название" />
        <LocationField />
        <BrandModelField />
        <RangeSelect name="price" label="Цена" options={PRICE_MOCK} formatOption={(price) => formatNumber(+price)} />
        <RangeSelect name="manufactureYear" label="Год выпуска" options={MANUFACTURE_YEAR_MOCK} itemOrder="desc" />
        <RangeSelect
          name="mileage"
          label="Пробег, км"
          options={MILEAGE_MOCK}
          formatOption={(price) => formatNumber(+price)}
        />
        <FuelField />
        {/* TODO: пока выключаем */}
        {/* <EngineVolumeSelect options={ENGINE_VOLUME_MOCK} /> */}
        {/* <RangeSelect name="enginePower" label="Мощность двигателя, л.с." options={ENGINE_POWER_MOCK} /> */}
        <SaveFilter onSubmit={handleSubmit(onSubmit)} disabled={!formState.isDirty} />
      </form>
    </FormProvider>
  );
}
