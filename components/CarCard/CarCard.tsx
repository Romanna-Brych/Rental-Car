'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/types/car';
import css from './CarCard.module.css';
import { useCarsStore } from '@/lib/store/carsStore';

interface CarCardProps {
  car: Car;
}

function CarCard({ car }: CarCardProps) {
  const { favorites, toggleFavorite } = useCarsStore();
  const isFavorite = favorites.includes(String(car.id));

  const [, city, country] = car.address.split(', ');
  const mileage = car.mileage.toLocaleString('uk-UA');

  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          className={css.img}
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          width={276}
          height={268}
          priority
        />
        <button
          onClick={() => toggleFavorite(String(car.id))}
          className={css.favoriteBtn}
          type="button"
        >
          <svg className={`${css.icon} ${isFavorite ? css.active : ''}`}>
            <use
              href={
                isFavorite ? '/sprite.svg#heart-active' : '/sprite.svg#heart'
              }
            />
          </svg>
        </button>
      </div>
      <div className={css.info}>
        <div className={css.titleRow}>
          <p className={css.title}>
            {car.brand} <span className={css.model}>{car.model}</span>,
            {car.year}
          </p>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>
        <p className={css.details}>
          {city} | {country} | {car.rentalCompany} |
        </p>
        <p className={css.details}>
          {car.type} | {mileage} km
        </p>
      </div>
      <Link className={css.btn} href={`/catalog/${car.id}`}>
        Read more
      </Link>
    </li>
  );
}

export default CarCard;
