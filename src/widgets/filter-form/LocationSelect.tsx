import { MenuItem } from '@mui/material';
import { TabbedInput } from 'features/filter';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useCities } from 'shared/hooks/useCities';
import { useRegions } from 'shared/hooks/useRegions';
import { ICity, IRegion } from 'shared/types';
import { RHFMultiSelect } from 'ui/react-hook-form/rhf-multi-select';

import { clearLocation } from './utils/clearLocation';

export const LocationSelect = memo(function LocationSelect() {
  const { setValue } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({ name: 'searchType' });

  const { citiesMap, cities, isLoading: isLoadingCities } = useCities();
  const { regionsMap, regions, isLoading: isLoadingRegions } = useRegions();

  const onClear = () => {
    clearLocation(value, setValue);
  };

  if (isLoadingCities || isLoadingRegions || !cities || !regions) return null;

  return (
    <TabbedInput
      onClear={onClear}
      activeTabKey={value}
      setActiveTabKey={(tabKey) => onChange(tabKey)}
      variants={[
        {
          tabKey: 'region',
          title: 'Регионы',
          Input: (
            <RHFMultiSelect<IRegion, number>
              key="region"
              name="region"
              options={regions}
              inputLabel="Добавить регион"
              renderOption={renderRegion}
              getFieldValue={(cityId) => {
                return regionsMap[cityId];
              }}
            />
          ),
        },
        {
          tabKey: 'city',
          title: 'Город',
          Input: (
            <RHFMultiSelect<ICity, number>
              key="city"
              name="city"
              options={cities}
              inputLabel="Добавить город"
              renderOption={renderCity}
              getFieldValue={(cityId) => {
                return citiesMap[cityId];
              }}
            />
          ),
        },
      ]}
    />
  );
});

function renderCity(city: ICity) {
  return (
    <MenuItem key={city.id} value={city.id}>
      {city.name}
    </MenuItem>
  );
}

function renderRegion(city: IRegion) {
  return (
    <MenuItem key={city.id} value={city.id}>
      {city.name}
    </MenuItem>
  );
}
