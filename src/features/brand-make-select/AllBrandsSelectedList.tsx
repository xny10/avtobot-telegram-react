import { Chip } from '@mui/material';
import { ICar } from 'shared/types';

type AllBrandsSelectedListProps = {
  cars: ICar[];
};

export function AllBrandsSelectedList({ cars }: AllBrandsSelectedListProps) {
  return (
    <>
      {cars.map((car) => (
        <Chip key={car.id} size="small" label={`${car.name} (все)`} />
      ))}
    </>
  );
}
