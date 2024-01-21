import { Chip } from '@mui/material';
import { ICar } from 'shared/types';

type AllCarsSelectedListProps = {
  cars: ICar[];
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
