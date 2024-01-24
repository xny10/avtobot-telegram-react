import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { useDeleteFilter } from 'shared/hooks/filter/useDeleteFilter';
import { useDialog } from 'shared/hooks/useDialog';

type DeleteFilterProps = {
  filterId: number;
  filterName: string;
};

export function DeleteFilter({ filterId, filterName }: DeleteFilterProps) {
  const { open, onClose, onOpen } = useDialog();

  const [deleteFilter, { isLoading }] = useDeleteFilter();

  const onDelete = async () => {
    const { success } = await deleteFilter(filterId, filterName);
    if (success) onClose();
  };

  return (
    <>
      <IconButton onClick={onOpen} disabled={isLoading}>
        <DeleteIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Удалить фильтр "{filterName || filterId}"?</DialogTitle>
        <DialogContent>
          <DialogContentText>Вы не сможете его восстановить</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Нет</Button>
          <Button variant="contained" color="error" onClick={onDelete} disabled={isLoading}>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
