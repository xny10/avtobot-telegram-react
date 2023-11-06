import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { filterConfigMock } from 'shared/mocks/filterConfig.mock';
import { BaseLayout } from 'ui/base-layout';
import { LabeledCheckbox } from 'ui/labeled-checkbox';

import styles from './BrandModelField.module.scss';

export function BrandModelField() {
  const { control, setValue } = useFormContext();

  const { field } = useController({
    name: 'variants',
  });

  console.log('field.value', field.value);

  const options: Record<string, string[]> = filterConfigMock.variants;

  const [open, setOpen] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const onOpen = (e: MouseEvent) => {
    setOpen(true);
  };

  const [search, setSearch] = useState('');
  const brands = Object.keys(options);
  const filteredBrands = brands.filter((brand) => brand.toLowerCase().trim().includes(search.toLowerCase().trim()));

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
            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              label="Поиск"
              InputProps={{ startAdornment: <SearchIcon /> }}
            />
            {!filteredBrands.length && <Typography>Ничего не найдено</Typography>}
            {!!filteredBrands.length && (
              <div className={styles.brands}>
                <LabeledCheckbox checked={false} onCheck={() => {}}>
                  Выбрать всё / Снять выделение
                </LabeledCheckbox>
                <Typography></Typography>
                <div className={styles.brand_list}>
                  {filteredBrands.map((brand) => (
                    <LabeledCheckbox key={brand} checked={true} onCheck={() => {}}>
                      {brand}
                    </LabeledCheckbox>
                  ))}
                </div>
              </div>
            )}
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
