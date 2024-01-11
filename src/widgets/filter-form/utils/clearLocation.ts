import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { ISearchType } from 'shared/types';

export function clearLocation(searchType: ISearchType, setValue: UseFormSetValue<FieldValues>) {
  // TODO: должны браться из кэша rtkq
  const cityOptions = ['Ростов-на-Дону', 'Москва', 'Таганрог'];
  const regionOptions = ['Ростовская обл.', 'Москва', 'Подмосковье', 'Адыгея', 'Тюменская обл.'];

  function clearRegion() {
    setValue('region', regionOptions);
  }

  function clearCity() {
    setValue('city', cityOptions);
  }
  if (searchType === 'region') clearRegion();
  else if (searchType === 'city') clearCity();
}
