import { Chip } from '@mui/material';
import { Fragment, ReactNode } from 'react';
import { useWatch } from 'react-hook-form';
import { ICarsSerialized } from 'shared/types';

import styles from './SelectedList.module.scss';

type SelectedListProps = {
  EverythingSelectedList: ReactNode;
};

export function SelectedList({ EverythingSelectedList }: SelectedListProps) {
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
        if (selectedAllLength === result.length || selectedNothingLength === result.length) {
          return <>{EverythingSelectedList}</>;
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
