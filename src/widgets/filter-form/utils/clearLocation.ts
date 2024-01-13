import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { ISearchType } from 'shared/types';

export function clearLocation(searchType: ISearchType, setValue: UseFormSetValue<FieldValues>) {
  function clearRegion() {
    setValue('region', []);
  }

  function clearCity() {
    setValue('city', []);
  }
  if (searchType === 'region') clearRegion();
  else if (searchType === 'city') clearCity();
}
