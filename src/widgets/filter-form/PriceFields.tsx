import { RangedInput } from 'features/filter/ui/ranged-input';
import { useFormContext } from 'react-hook-form';
import { RHFTextField } from 'ui/react-hook-form/rhf-text-field';

export function PriceFields() {
  const { control, setValue } = useFormContext();

  const onClear = () => {
    setValue('price.0', '');
    setValue('price.1', '');
  };

  return (
    <RangedInput
      title="Цена"
      onClear={onClear}
      LeftInput={<RHFTextField control={control} name="price.0" placeholder="от" type="number" />}
      RightInput={<RHFTextField control={control} name="price.1" placeholder="от" type="number" />}
    />
  );
}
