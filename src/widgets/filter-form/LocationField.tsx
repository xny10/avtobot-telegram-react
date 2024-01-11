import { TabbedInput } from 'features/filter';
import { memo } from 'react';
import { useController } from 'react-hook-form';
import { MultiSelect } from 'ui/multi-select';

export const LocationField = memo(function LocationField() {
  const {
    field: { value, onChange },
  } = useController({ name: 'searchType' });

  // TODO: load cities & regions from backend
  const cityOptions = ['Ростов-на-Дону', 'Москва', 'Таганрог'];
  const regionOptions = ['Ростовская обл.', 'Москва', 'Подмосковье', 'Адыгея', 'Тюменская обл.'];

  return (
    <TabbedInput
      onClear={() => {}}
      activeTabKey={value}
      setActiveTabKey={(tabKey) => onChange(tabKey)}
      variants={[
        {
          tabKey: 'region',
          title: 'Регионы',
          Input: <MultiSelect key="region" name="region" options={regionOptions} inputLabel="Добавить регион" />,
        },
        {
          tabKey: 'city',
          title: 'Город',
          Input: <MultiSelect key="city" name="city" options={cityOptions} inputLabel="Добавить город" />,
        },
      ]}
    />
  );
});
