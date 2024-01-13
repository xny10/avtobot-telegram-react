import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField, Typography } from '@mui/material';
import { animated, useTransition } from '@react-spring/web';
import { produce } from 'immer';
import { memo, useState } from 'react';
import { useController } from 'react-hook-form';
import { ICar, ICarsSerialized } from 'shared/types';
import { BaseLayout } from 'ui/base-layout';
import { LabeledCheckbox } from 'ui/labeled-checkbox';

import styles from './BrandModelSelect.module.scss';
import { MakeCheckbox } from './MakeCheckbox';

type BrandCheckboxProps = {
  car: ICar;
};

export const BrandCheckbox = memo(function BrandCheckbox({ car }: BrandCheckboxProps) {
  const {
    field: { value, onChange },
  } = useController({ name: `cars.${car.brand}` });

  const carSerialized = value as ICarsSerialized[string];

  const isAllMakesSelected = Object.values(carSerialized).every(Boolean);

  const onTriggerAll = (select: boolean) => {
    const newValue = produce(carSerialized, (draft) => {
      Object.keys(draft).forEach((make) => {
        draft[make] = select;
      });
    });
    onChange(newValue);
  };

  const onTriggerMake = (makeName: string) => {
    const newValue = produce(carSerialized, (draft) => {
      draft[makeName] = !draft[makeName];
    });
    onChange(newValue);
  };

  const [search, setSearch] = useState('');

  const [open, setOpen] = useState(false);

  const transitions = useTransition(open, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(100%)' },
  });

  const carMakesFiltered = car.makes.filter((make) => make.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div key={car.brand}>
      <div className={styles.brand_checkbox_wrapper}>
        <LabeledCheckbox checked={isAllMakesSelected} onCheck={onTriggerAll}>
          {car.brand}
        </LabeledCheckbox>
        <IconButton onClick={() => setOpen(true)}>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </div>
      {transitions((style, open) => {
        return (
          open && (
            <animated.div style={style} className={styles.form}>
              <BaseLayout backLinkBehavior={() => setOpen(false)} title={car.brand}>
                <TextField
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  fullWidth
                  label="Поиск"
                  InputProps={{ endAdornment: <SearchIcon /> }}
                />
                <div className={styles.checkboxes}>
                  <LabeledCheckbox checked={isAllMakesSelected} onCheck={onTriggerAll}>
                    Выбрать всё / Снять выделение
                  </LabeledCheckbox>
                  <div className={styles.checkbox_list}>
                    {carMakesFiltered.map((make) => (
                      <MakeCheckbox
                        key={make.name}
                        makeName={make.name}
                        checked={carSerialized[make.name]}
                        onCheck={onTriggerMake}
                      />
                    ))}
                    {carMakesFiltered.length !== car.makes.length && (
                      <Typography color="gray">
                        Показано {carMakesFiltered.length} из {car.makes.length}
                      </Typography>
                    )}
                  </div>
                </div>
              </BaseLayout>
            </animated.div>
          )
        );
      })}
    </div>
  );
});
