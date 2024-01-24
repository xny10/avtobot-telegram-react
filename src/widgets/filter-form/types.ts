import { FieldValues, UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import { ICarExpanded } from 'shared/types';

export type SubmitButtonParams<T extends FieldValues> = {
  handleSubmit: UseFormHandleSubmit<T>;
  formApi: UseFormReturn<T>;
  cars: ICarExpanded[];
};
