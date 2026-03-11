import { Car, CarsResponse } from '@/types/car';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

interface CarsQueryParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export async function getCars(
  params: CarsQueryParams = {}
): Promise<CarsResponse> {
  const { data } = await api.get<CarsResponse>('/cars', {
    params,
  });
  return data;
}

export async function getCarById(id: string): Promise<Car> {
  const { data } = await api.get<Car>(`/cars/${id}`);
  return data;
}
