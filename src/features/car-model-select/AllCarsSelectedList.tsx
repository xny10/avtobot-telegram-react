import { Chip } from '@mui/material';
import { ICarExpanded } from 'shared/types';

type AllCarsSelectedListProps = {
  cars: ICarExpanded[];
};

export function AllCarsSelectedList({ cars }: AllCarsSelectedListProps) {
  return (
    <>
      {cars.map((car) => (
        <Chip key={car.id} size="small" label={`${car.name} (все)`} />
      ))}
    </>
  );
}
