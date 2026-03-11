import CarDetails from '@/components/CarDetails/CarDetails';
import { getCarById } from '@/lib/api';

interface CarDetailsPageProps {
  params: Promise<{ id: string }>;
}

async function CarDetailsPage({ params }: CarDetailsPageProps) {
  const { id } = await params;

  const car = await getCarById(id);
  return (
    <div>
      <CarDetails car={car} />
    </div>
  );
}

export default CarDetailsPage;
