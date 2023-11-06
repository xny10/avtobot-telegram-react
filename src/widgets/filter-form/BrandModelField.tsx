import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { MenuItem, TextField } from '@mui/material';
import { RangedInput } from 'features/filter';
import { MouseEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BaseLayout } from 'ui/base-layout';
import { RHFSelect } from 'ui/react-hook-form';

import styles from './BrandModelField.module.scss';

export function BrandModelField() {
  const { control, setValue } = useFormContext();

  const options: Record<string, string[]> = {
    AC: ['378 GT ZAGATO', 'ACE', 'ACECA', 'C WAY M1'],
    ACURA: ['TEST1', 'TEST2', 'TEST3'],
    'ASTON-MARTIN': ['AST1', 'AST2', 'AST3'],
  };

  const [open, setOpen] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const onOpen = (e: MouseEvent) => {
    setOpen(true);
  };

  return (
    <div>
      <div onClick={onOpen}>
        <TextField
          className={styles.open_button}
          fullWidth
          label="Выбрать марку и модель"
          InputProps={{ endAdornment: <MoreHorizIcon /> }}
        />
      </div>
      {open && (
        <div className={styles.form}>
          <BaseLayout backLinkBehavior={() => setOpen(false)} title="Марки и модели авто">
            form
          </BaseLayout>
        </div>
      )}
    </div>
  );

  // const optionMapLabel = new Map<string, string>();
  // optionMapLabel.set('', 'Не выбрано');
  // for (let i = new Date().getFullYear(); i > 1980; i--) {
  //   optionMapLabel.set(i.toString(), i.toString());
  // }

  // const options = Array.from(optionMapLabel.keys());

  // const renderOption = (option: string) => (
  //   <MenuItem key={option} value={option}>
  //     {optionMapLabel.get(option)}
  //   </MenuItem>
  // );

  // const onClear = () => {
  //   setValue('manufactureYear.0', '');
  //   setValue('manufactureYear.1', '');
  // };

  // return (
  //   <RangedInput
  //     title="Год выпуска"
  //     onClear={onClear}
  //     LeftInput={
  //       <RHFSelect
  //         options={options}
  //         control={control}
  //         name="manufactureYear.0"
  //         label="от"
  //         renderOption={renderOption}
  //         labelProps={{
  //           className: styles.select_label,
  //           style: {
  //             left: -13,
  //           },
  //         }}
  //       />
  //     }
  //     RightInput={
  //       <RHFSelect
  //         options={options}
  //         control={control}
  //         name="manufactureYear.1"
  //         label="до"
  //         renderOption={renderOption}
  //         labelProps={{
  //           className: styles.select_label,
  //           style: {
  //             left: -13,
  //           },
  //         }}
  //       />
  //     }
  //   />
  // );
}
