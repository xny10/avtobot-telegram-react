import { TabbedInput } from 'features/filter';
import { memo, useState } from 'react';
import { MultiSelect } from 'ui/multi-select';

export const LocationField = memo(function LocationField() {
  const [activeTabKey, setActiveTabKey] = useState('region');

  const cityOptions = ['Ростов-на-Дону', 'Москва', 'Таганрог'];
  const regionOptions = ['Ростовская обл.', 'Москва', 'Подмосковье', 'Адыгея', 'Тюменская обл.'];

  return (
    <TabbedInput
      onClear={() => {}}
      activeTabKey={activeTabKey}
      setActiveTabKey={(tabKey) => setActiveTabKey(tabKey)}
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
