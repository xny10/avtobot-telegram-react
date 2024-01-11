import { Chip } from '@mui/material';
import { Control, useFormContext, useWatch } from 'react-hook-form';

import styles from './styles.module.scss';

type SelectedOptionsProps = {
  name: string;
  control?: Control<any, any>;
};

export function SelectedOptions({ name, control }: SelectedOptionsProps) {
  const { control: contextControl, setValue } = useFormContext();

  const selectedOptions: string[] = useWatch({
    control: control ?? contextControl,
    name,
  });

  const onDeleteOption = (option: string) => {
    setValue(
      name,
      selectedOptions.filter((opt) => opt !== option),
      { shouldDirty: true }
    );
  };

  return (
    <div className={styles.selected_options}>
      {selectedOptions?.map((option) => (
        <Chip key={option} size="small" label={option} onDelete={() => onDeleteOption(option)} />
      ))}
    </div>
  );
}
