import { Car } from '@/types/car';
import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

interface CarListProps {
  cars: Car[];
}

function CarList({ cars }: CarListProps) {
  return (
    <ul className={css.list}>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
}

export default CarList;
