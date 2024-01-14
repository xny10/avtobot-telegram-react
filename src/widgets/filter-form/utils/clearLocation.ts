import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { ISearchType } from 'shared/types';

export function clearLocation(searchType: ISearchType, setValue: UseFormSetValue<FieldValues>) {
  // TODO: load cities & regions from backend
  const cityOptions = ['Ростов-на-Дону', 'Москва', 'Таганрог'];
  const regionOptions = ['Ростовская обл.', 'Москва', 'Подмосковье', 'Адыгея', 'Тюменская обл.'];

  function clearRegion() {
    setValue('region', regionOptions, { shouldDirty: true });
  }

  function clearCity() {
    setValue('city', cityOptions, { shouldDirty: true });
  }
  if (searchType === 'region') clearRegion();
  else if (searchType === 'city') clearCity();
}
