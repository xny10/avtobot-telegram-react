import { CarModelSelect } from 'features/car-model-select';
import { ReactNode, useEffect } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { carsMock } from 'shared/mocks/cars.mock';
import { ICarExpanded } from 'shared/types';
import { formatNumber } from 'shared/utils/format.utils';
import { RangeSelect } from 'ui/range-select';
import { RHFTextField } from 'ui/react-hook-form';

import { FuelField } from './FuelField';
import { LocationSelect } from './LocationSelect';
import styles from './styles.module.scss';
import { SubmitButtonParams } from './types';

type FilterFormProps<T extends FieldValues> = {
  defaultValues: T;
  cars: ICarExpanded[];
  setConfirmExit: (confirm: boolean) => void;
  renderSubmitButton: (params: SubmitButtonParams<T>) => ReactNode;
};

export function FilterForm<T extends FieldValues>({
  defaultValues,
  cars,
  setConfirmExit,
  renderSubmitButton,
}: FilterFormProps<T>) {
  const formApi = useForm<T>({
    defaultValues: defaultValues as any,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { control, handleSubmit, formState } = formApi;

  useEffect(() => {
    setConfirmExit(formState.isDirty);
  }, [formState.isDirty]);

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
    <FormProvider {...formApi}>
      <form className={styles.form}>
        <RHFTextField control={control} name="name" label="Название" />
        <LocationSelect />
        <CarModelSelect cars={carsMock} />
        <RangeSelect name="price" label="Цена" options={PRICE_MOCK} formatOption={formatNumber} />
        <RangeSelect name="manufactureYear" label="Год выпуска" options={MANUFACTURE_YEAR_MOCK} itemOrder="desc" />
        <RangeSelect name="mileage" label="Пробег, км" options={MILEAGE_MOCK} formatOption={formatNumber} />
        <FuelField />
        {/* TODO: пока выключаем */}
        {/* <EngineVolumeSelect options={ENGINE_VOLUME_MOCK} /> */}
        {/* <RangeSelect name="enginePower" label="Мощность двигателя, л.с." options={ENGINE_POWER_MOCK} /> */}
        {renderSubmitButton({ cars, handleSubmit, formApi })}
      </form>
    </FormProvider>
  );
}
