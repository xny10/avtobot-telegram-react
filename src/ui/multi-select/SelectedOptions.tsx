import { Chip } from '@mui/material';
import { Control, useFormContext, useWatch } from 'react-hook-form';

import styles from './styles.module.scss';

type SelectedOptionsProps = {
  name: string;
  control?: Control<any, any>;
  options: string[];
};

export function SelectedOptions({ name, control, options }: SelectedOptionsProps) {
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

  // TODO: такая проверка не сработает для вложенных структур, надо будет что-то придумать
  const isEverythingSelected = selectedOptions.length === options.length;

  return (
    <div className={styles.selected_options}>
      {(() => {
        if (selectedOptions.length === 0) {
          return <Chip variant="outlined" color="error" size="small" label="Ничего не выбрано" />;
        }

        if (isEverythingSelected) {
          return <Chip variant="outlined" size="small" label="Все" />;
        }

        return selectedOptions.map((option) => (
          <Chip key={option} size="small" label={option} onDelete={() => onDeleteOption(option)} />
        ));
      })()}
    </div>
  );
}
