import { useFormContext } from 'react-hook-form';
import { setAllCarsSelection } from 'shared/utils/filter.utils';
import { ClearButton } from 'ui/clear-button';

export function ClearAll() {
  const { setValue, getValues } = useFormContext();

  const onClear = () => {
    const cars = getValues('carChoices');
    setValue('carChoices', setAllCarsSelection(cars, false), { shouldDirty: true });
  };

  return <ClearButton onClear={onClear} />;
}
