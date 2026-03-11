import CarList from '@/components/CarList/CarList';
import { getCars } from '@/lib/api';

async function CatalogPage() {
  const data = await getCars();
  console.log(data.cars);
  return (
    <div className="container">
      <CarList cars={data.cars} />
    </div>
  );
}

export default CatalogPage;
