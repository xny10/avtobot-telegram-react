import { UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { ICarExpanded, IFilterSerialized } from 'shared/types';

export type SubmitButtonParams = {
  handleSubmit: UseFormHandleSubmit<IFilterSerialized>;
  formApi: UseFormReturn<IFilterSerialized>;
  cars: ICarExpanded[];
};
