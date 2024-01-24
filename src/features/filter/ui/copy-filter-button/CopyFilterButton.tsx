import FileCopyIcon from '@mui/icons-material/FileCopy';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import { CopyFilterDto } from 'shared/dto/CopyFilter.dto';
import { useCopyFilter } from 'shared/hooks/filter/useCopyFilter';
import { useDialog } from 'shared/hooks/useDialog';
import { IFilter } from 'shared/types';

type CopyFilterButtonProps = {
  filterId: number;
  filterName: string;
};

export function CopyFilterButton({ filterId, filterName }: CopyFilterButtonProps) {
  const { open, onClose, onOpen } = useDialog();
  const client = useQueryClient();

  const [copyFilter, { isLoading }] = useCopyFilter();

  const onCopy = async () => {
    const filter = client.getQueryData<IFilter[]>('filters')?.find((filter) => filter.id === filterId);

    if (!filter) {
      return toast.error('Фильтр не найден');
    }

    // TODO: имена должны быть (2), (3), (4) и так далее, а не всегда (2)
    // TODO: Возможно сделать инпуты имени и тоглов
    const dto = new CopyFilterDto(filter);
    const { success } = await copyFilter(dto);
    if (success) {
      onClose();
    }
  };

  return (
    <>
      <IconButton onClick={onOpen}>
        <FileCopyIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Создать копию фильтра "{filterName}"?</DialogTitle>
        <DialogContent>
          <DialogContentText>Имя нового фильтра "{filterName} (2)"</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>нет</Button>
          <Button variant="contained" color="success" onClick={onCopy} disabled={isLoading}>
            создать
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
