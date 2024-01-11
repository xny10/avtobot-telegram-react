import { TabbedInput } from 'features/filter';
import { memo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { MultiSelect } from 'ui/multi-select';
import { RHFSelect } from 'ui/react-hook-form';

export const LocationField = memo(function LocationField() {
  const { control } = useFormContext();

  const [activeTabKey, setActiveTabKey] = useState('regions');

  const cityOptions: string[] = ['Ростов-на-Дону', 'Москва', 'Таганрог'];
  const CitySelect = <RHFSelect control={control} name="city" options={cityOptions} />;

  const regionOptions: string[] = ['Ростовская обл.', 'Москва', 'Подмосковье', 'Адыгея', 'Тюменская обл.'];

  return (
    <TabbedInput
      onClear={() => {}}
      activeTabKey={activeTabKey}
      setActiveTabKey={(tabKey) => setActiveTabKey(tabKey)}
      variants={[
        {
          tabKey: 'regions',
          title: 'Регионы',
          Input: <MultiSelect name="region" options={regionOptions} inputLabel="Добавить регион" />,
        },
        { tabKey: 'city', title: 'Город', Input: CitySelect },
      ]}
    />
  );
});
