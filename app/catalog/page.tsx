import CatalogClient from './CatalogClient';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getBrands } from '@/lib/api';

export default async function CatalogPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
