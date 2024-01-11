import { TabbedInput } from 'features/filter';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { RHFMultiSelect } from 'ui/react-hook-form/rhf-multi-select';

import { clearLocation } from './utils/clearLocation';

export const LocationField = memo(function LocationField() {
  const { setValue } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({ name: 'searchType' });

  // TODO: load cities & regions from backend
  const cityOptions = ['Ростов-на-Дону', 'Москва', 'Таганрог'];
  const regionOptions = ['Ростовская обл.', 'Москва', 'Подмосковье', 'Адыгея', 'Тюменская обл.'];

  const onClear = () => {
    clearLocation(value, setValue);
  };

  return (
    <TabbedInput
      onClear={onClear}
      activeTabKey={value}
      setActiveTabKey={(tabKey) => onChange(tabKey)}
      variants={[
        {
          tabKey: 'region',
          title: 'Регионы',
          Input: <RHFMultiSelect key="region" name="region" options={regionOptions} inputLabel="Добавить регион" />,
        },
        {
          tabKey: 'city',
          title: 'Город',
          Input: <RHFMultiSelect key="city" name="city" options={cityOptions} inputLabel="Добавить город" />,
        },
      ]}
    />
  );
});
