import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { filterConfigMock } from 'shared/mocks/filterConfig.mock';
import { BaseLayout } from 'ui/base-layout';
import { LabeledCheckbox } from 'ui/labeled-checkbox';
import { RHFLabeledCheckbox } from 'ui/react-hook-form';

import styles from './BrandModelField.module.scss';

export function BrandModelField() {
  const { control, setValue, getValues } = useFormContext();

  const { field } = useController({
    name: 'variants',
  });

  const options: Record<string, string[]> = filterConfigMock.variants;

  const [open, setOpen] = useState(true);
  // const [openedBrand, setOpenedBrand] = useState<string | null>(null);

  const onOpen = (e: MouseEvent) => {
    setOpen(true);
  };

  const [search, setSearch] = useState('');
  const brands = Object.keys(options);
  const filteredBrands = brands.filter((brand) => brand.toLowerCase().trim().includes(search.toLowerCase().trim()));

  function isBrandSelected(brand: string) {
    return Object.values(field.value[brand]).every((isSelected) => isSelected === true);
  }

  function areAllBrandsSelected() {
    return Object.keys(field.value).every(isBrandSelected);
  }

  const isEverythingSelected = areAllBrandsSelected();

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
            <Button onClick={() => console.log('getValues()', getValues())}>get values()</Button>
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
                <LabeledCheckbox checked={isEverythingSelected} onCheck={() => {}}>
                  Выбрать всё / Снять выделение
                </LabeledCheckbox>
                <Typography></Typography>
                <div className={styles.brand_list}>
                  {filteredBrands.map((brand, i) => {
                    const name = `variants.${brand}`;
                    return (
                      <RHFLabeledCheckbox
                        control={control}
                        key={name}
                        name={name}
                        transformValue={() => {
                          return isBrandSelected(brand);
                        }}
                        transformOnChange={(value) => {
                          let copy = { ...value };
                          if (!isBrandSelected(brand)) {
                            Object.keys(copy).forEach((key) => {
                              copy[key] = true;
                            });
                          } else {
                            Object.keys(copy).forEach((key) => {
                              copy[key] = false;
                            });
                          }
                          return copy;
                        }}
                      >
                        {brand}
                      </RHFLabeledCheckbox>
                    );
                  })}
                </div>
              </div>
            )}
          </BaseLayout>
        </div>
      )}
    </div>
  );
}
