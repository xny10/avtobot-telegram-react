import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Chip, IconButton, TextField, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { filterConfigMock } from 'shared/mocks/filterConfig.mock';
import { BaseLayout } from 'ui/base-layout';
import { LabeledCheckbox } from 'ui/labeled-checkbox';
import { RHFLabeledCheckbox } from 'ui/react-hook-form';

import styles from './BrandModelField.module.scss';

export const BrandModelField = memo(function BrandModelField() {
  const [open, setOpen] = useState(false);
  const [openedBrand, setOpenedBrand] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const { control, setValue, watch } = useFormContext();

  const { field } = useController({
    name: 'variants',
  });

  const options: Record<string, string[]> = filterConfigMock.variants;
  const brands = Object.keys(options);
  const filteredBrands = brands.filter((brand) => brand.toLowerCase().trim().includes(search.toLowerCase().trim()));

  function isBrandSelected(brand: string) {
    return Object.values(field.value[brand]).every((isSelected) => isSelected === true);
  }

  function areAllBrandsSelected(variants: any[]) {
    return Object.keys(variants).every(isBrandSelected);
  }

  watch('variants');
  const isEverythingSelected = areAllBrandsSelected(field.value);

  // TODO: декомпозировать эту поебень
  function toggleBrands() {
    // todo: не работает, не ебу почему
    // const copy = JSON.parse(JSON.stringify(field.value));
    // Object.keys(copy).forEach((brand) => {
    //   Object.keys(copy[brand]).forEach((model) => {
    //     copy[brand][model] = !isEverythingSelected;
    //   });
    // });
    // setValue('variants', copy);

    brands.forEach((brand) => {
      const models = { ...field.value[brand] };
      Object.keys(models).forEach((model) => {
        models[model] = !isEverythingSelected;
      });
      setValue(`variants.${brand}`, models, { shouldDirty: true });
    });
  }

  return (
    <div>
      <div className={styles.open_button_wrapper} onClick={() => setOpen(true)}>
        <TextField
          className={styles.open_button}
          fullWidth
          label="Выбрать марку и модель"
          InputProps={{ endAdornment: <MoreHorizIcon /> }}
        />
      </div>
      <div className={styles.selected_variants}>
        {Object.keys(field.value).map((brand) => {
          const models = field.value[brand];
          if (Object.values(models).some((value) => !!value)) {
            const selectedModels = Object.entries(models)
              .filter(([model, isSelected]) => isSelected)
              .map(([model]) => model);
            return (
              <Chip key={brand} label={`${brand}(${isBrandSelected(brand) ? 'Все' : selectedModels.join(',')})`} />
            );
          }
          return null;
        })}
      </div>
      {open && (
        <div className={styles.form}>
          <BaseLayout backLinkBehavior={() => setOpen(false)} title="Марки и модели">
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
                <LabeledCheckbox checked={isEverythingSelected} onCheck={toggleBrands}>
                  Выбрать всё / Снять выделение
                </LabeledCheckbox>
                <Typography></Typography>
                <div className={styles.brand_list}>
                  {filteredBrands.map((brand, i) => {
                    const name = `variants.${brand}`;
                    return (
                      <div key={name} className={styles.brand_checkbox_wrapper}>
                        <RHFLabeledCheckbox
                          control={control}
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
                            console.log(copy);
                            return copy;
                          }}
                        >
                          {brand}
                        </RHFLabeledCheckbox>
                        <IconButton onClick={() => setOpenedBrand(brand)}>
                          <ExpandMoreIcon />
                        </IconButton>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <Button className={styles.go_back_button} variant="outlined" fullWidth onClick={() => setOpen(false)}>
              Назад
            </Button>
          </BaseLayout>
        </div>
      )}
      {openedBrand && (
        <div className={styles.form}>
          <BaseLayout backLinkBehavior={() => setOpenedBrand(null)} title={openedBrand}>
            <div key={openedBrand}>
              <LabeledCheckbox
                checked={isBrandSelected(openedBrand)}
                onCheck={() => {
                  const isOpenedBrandSelected = isBrandSelected(openedBrand);
                  const selectedBrand = field.value[openedBrand];
                  const copy = { ...selectedBrand };

                  Object.keys(copy).forEach((model) => {
                    copy[model] = !isOpenedBrandSelected;
                  });
                  setValue(`variants.${openedBrand}`, copy);
                }}
              >
                Выбрать всё / Снять выделение
              </LabeledCheckbox>
              <div className={styles.models} key={Math.random()}>
                {Object.keys(field.value[openedBrand]).map((model) => {
                  const name = `variants.${openedBrand}.${model}`;
                  return (
                    <RHFLabeledCheckbox
                      key={name}
                      control={control}
                      name={name}
                      transformOnChange={(isSelected) => !isSelected}
                    >
                      {model}
                    </RHFLabeledCheckbox>
                  );
                })}
              </div>
            </div>
            <Button className={styles.go_back_button} variant="outlined" fullWidth onClick={() => setOpenedBrand(null)}>
              Назад
            </Button>
          </BaseLayout>
        </div>
      )}
    </div>
  );
});
