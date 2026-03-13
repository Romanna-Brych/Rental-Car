'use client';

import { useCarsStore } from '@/lib/store/carsStore';
import css from './CarFilters.module.css';
import CustomSelect from '../CustomSelect/CustomSelect';

interface CarFiltersProps {
  brands: string[];
  onSearch: () => void;
}

const prices = ['30', '40', '50', '60', '70', '80'];

function formatMileage(value: string) {
  if (!value) return '';
  return Number(value).toLocaleString('en-US');
}

function CarFilters({ brands, onSearch }: CarFiltersProps) {
  const { filters, setFilter } = useCarsStore();

  const brandOptions = brands.map(brand => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = prices.map(price => ({
    value: price,
    label: `To $${price}`,
    menuLabel: price,
  }));

  const handleMileageChange = (
    name: 'minMileage' | 'maxMileage',
    value: string
  ) => {
    const normalizedValue = value.replace(/[^\d]/g, '');
    setFilter(name, normalizedValue);
  };

  return (
    <form
      className={css.form}
      onSubmit={e => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div className={`${css.field} ${css.brandField}`}>
        <label className={css.label} htmlFor="brand">
          Car brand
        </label>

        <CustomSelect
          id="brand"
          value={filters.brand}
          placeholder="Choose a brand"
          options={brandOptions}
          onChange={value => setFilter('brand', value)}
        />
      </div>

      <div className={`${css.field} ${css.priceField}`}>
        <label className={css.label} htmlFor="price">
          Price/ 1 hour
        </label>

        <CustomSelect
          id="price"
          value={filters.rentalPrice}
          placeholder="Choose a price"
          options={priceOptions}
          onChange={value => setFilter('rentalPrice', value)}
        />
      </div>

      <div className={`${css.field} ${css.mileageField}`}>
        <label className={css.label}>Car mileage / km</label>

        <div className={css.mileageWrap}>
          <label className={`${css.mileageInput} ${css.leftInput}`}>
            <span className={css.inputPrefix}>From</span>
            <input
              name="minMileage"
              className={css.input}
              type="text"
              value={formatMileage(filters.minMileage)}
              onChange={e => handleMileageChange('minMileage', e.target.value)}
            />
          </label>

          <label className={`${css.mileageInput} ${css.rightInput}`}>
            <span className={css.inputPrefix}>To</span>
            <input
              name="maxMileage"
              className={css.input}
              type="text"
              value={formatMileage(filters.maxMileage)}
              onChange={e => handleMileageChange('maxMileage', e.target.value)}
            />
          </label>
        </div>
      </div>

      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
}

export default CarFilters;
