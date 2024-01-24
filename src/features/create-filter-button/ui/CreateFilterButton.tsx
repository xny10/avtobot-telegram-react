import { Button } from '@mui/material';
import { UseFormHandleSubmit, UseFormReturn } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { CreateFilterDto } from 'shared/dto/CreateFilter.dto';
import { useCreateFilter } from 'shared/hooks/filter/useCreateFilter';
import { useTelegram } from 'shared/hooks/useTelegram';
import { ICarExpanded, IFilterCreateSerialized } from 'shared/types';

export type CreateFilterButtonProps = {
  handleSubmit: UseFormHandleSubmit<IFilterCreateSerialized>;
  formApi: UseFormReturn<IFilterCreateSerialized>;
  cars: ICarExpanded[];
};

export function CreateFilterButton({ handleSubmit, formApi, cars }: CreateFilterButtonProps) {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const client = useQueryClient();

  const [createFilter, { isLoading }] = useCreateFilter();

  const onSubmit = async (values: IFilterCreateSerialized) => {
    try {
      await createFilter(new CreateFilterDto(values, cars));
      navigate(ROUTES.filters);
      tg.HapticFeedback.impactOccurred('rigid');
      toast.success('Фильтр создан');
      client.invalidateQueries({
        queryKey: 'filters',
      });
    } catch (e) {
      toast.success('Не удалось создать');
    }
  };

  return (
    <Button variant="outlined" onClick={handleSubmit(onSubmit)} disabled={!formApi.formState.isDirty || isLoading}>
      Создать
    </Button>
  );
}
