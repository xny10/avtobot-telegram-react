import { Button } from '@mui/material';
import { UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import { FilterDto } from 'shared/dto/Filter.dto';
import { useUpdateFilter } from 'shared/hooks/filter/useUpdateFilter';
import { useTelegram } from 'shared/hooks/useTelegram';
import { ICarExpanded, IFilterSerialized } from 'shared/types';
import { serializeFilter } from 'shared/utils/form.utils';

export type SaveFilterButtonProps = {
  handleSubmit: UseFormHandleSubmit<IFilterSerialized>;
  formApi: UseFormReturn<IFilterSerialized>;
  cars: ICarExpanded[];
};

export function SaveFilterButton({ handleSubmit, formApi, cars }: SaveFilterButtonProps) {
  const { tg } = useTelegram();
  const client = useQueryClient();

  const [updateFilter, { isLoading }] = useUpdateFilter();

  const onSubmit = async (values: IFilterSerialized) => {
    try {
      const res = await updateFilter(new FilterDto(values, cars));
      formApi.reset(serializeFilter(res, cars));
      tg.HapticFeedback.impactOccurred('rigid');
      client.setQueryData(['filter', res.id], res);
      toast.success('Фильтр сохранён');
    } catch (e) {
      toast.success('Не удалось сохранить');
    }
  };

  return (
    <Button variant="contained" onClick={handleSubmit(onSubmit)} disabled={!formApi.formState.isDirty || isLoading}>
      Сохранить
    </Button>
  );
}
