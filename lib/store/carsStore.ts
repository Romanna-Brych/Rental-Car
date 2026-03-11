import { create } from 'zustand';

interface FiltersState {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

interface CarsStore {
  filters: FiltersState;

  setFilter: (name: keyof FiltersState, value: string) => void;
  resetFilters: () => void;
}

const initialFilters: FiltersState = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

export const useCarsStore = create<CarsStore>(set => ({
  filters: initialFilters,

  setFilter: (name, value) =>
    set(state => ({
      filters: {
        ...state.filters,
        [name]: value,
      },
    })),

  resetFilters: () =>
    set({
      filters: initialFilters,
    }),
}));
