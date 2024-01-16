import { Chip } from '@mui/material';
import { IManufacturer } from 'shared/types';

type AllCarsSelectedListProps = {
  cars: IManufacturer[];
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
