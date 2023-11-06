import { Chip } from '@mui/material';
import { TabbedInput } from 'features/filter';
import { memo, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { RHFSelect } from 'ui/react-hook-form';

import styles from './styles.module.scss';

export const LocationField = memo(function LocationField() {
  const { control, setValue } = useFormContext();

  const [activeTabKey, setActiveTabKey] = useState('regions');

  const cityOptions: string[] = ['Ростов-на-Дону', 'Москва', 'Таганрог'];
  const CitySelect = <RHFSelect control={control} name="city" options={cityOptions} />;

  const regionOptions: string[] = ['Ростовская обл.', 'Москва', 'Подмосковье', 'Адыгея', 'Тюменская обл.'];

  const regions: string[] = useWatch({ name: 'region' });
  const onDeleteRegion = (region: string) => {
    setValue(
      'region',
      regions.filter((reg) => reg !== region),
      { shouldDirty: true }
    );
  };
  const RegionSelect = (
    <div className={styles.region_select_wrapper}>
      <RHFSelect
        multiple
        control={control}
        name="region"
        options={regionOptions}
        renderValue={() => 'Добавить регион...'}
      />
      <div className={styles.regions}>
        {regions.map((region) => (
          <Chip key={region} size="small" label={region} onDelete={() => onDeleteRegion(region)} />
        ))}
      </div>
    </div>
  );

  return (
    <TabbedInput
      onClear={() => {}}
      activeTabKey={activeTabKey}
      setActiveTabKey={(tabKey) => setActiveTabKey(tabKey)}
      variants={[
        { tabKey: 'regions', title: 'Регионы', Input: RegionSelect },
        { tabKey: 'city', title: 'Город', Input: CitySelect },
      ]}
    />
  );
});
