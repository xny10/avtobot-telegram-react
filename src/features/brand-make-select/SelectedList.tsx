import { Chip } from '@mui/material';
import { Fragment } from 'react';
import { useWatch } from 'react-hook-form';
import { ICarsSerialized } from 'shared/types';

import styles from './SelectedList.module.scss';

export function SelectedList() {
  const cars: ICarsSerialized = useWatch({ name: 'cars' });

  const result = Object.entries(cars).map(([brand, makes]) => {
    const entries = Object.entries(makes);
    const selected = entries.filter(([makeName, isSelected]) => isSelected).map(([makeName, isSelected]) => makeName);

    return {
      brand,
      allSelected: entries.length === selected.length,
      nothingSelected: selected.length === 0,
      selected,
    };
  });

  let selectedAllLength = 0;
  let selectedNothingLength = 0;

  result.forEach((entry) => {
    if (entry.allSelected) selectedAllLength++;
    if (entry.nothingSelected) selectedNothingLength++;
  });

  return (
    <div className={styles.selected_chips}>
      {(() => {
        if (selectedAllLength === result.length) {
          return <Chip label="Все" size="small" variant="outlined" />;
        }
        if (selectedNothingLength === 0) {
          return <Chip label="Ничего не выбрано" size="small" variant="outlined" />;
        }

        return result
          .filter((entry) => !entry.nothingSelected)
          .map((entry) => (
            <Fragment key={entry.brand}>
              {(() => {
                if (entry.allSelected) {
                  return <Chip label={`${entry.brand} (все)`} size="small" />;
                }
                return <Chip label={`${entry.brand} (${entry.selected.join(', ')})`} size="small" />;
              })()}
            </Fragment>
          ));
      })()}
    </div>
  );
}
