'use client';

import { useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getCars, getBrands } from '@/lib/api';
import { useCarsStore } from '@/lib/store/carsStore';
import css from './CataligClient.module.css';

import CarFilters from '@/components/CarFilters/CarFilters';
import CarList from '@/components/CarList/CarList';

function CatalogClient() {
  const { filters } = useCarsStore();
  const [submittedFilters, setSubmittedFilters] = useState(filters);

  const { data: brands = [] } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
    refetchOnMount: false,
    staleTime: 5 * 60 * 1000,
  });

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['cars', submittedFilters],
      queryFn: ({ pageParam = 1 }) =>
        getCars({
          ...submittedFilters,
          page: String(pageParam),
          limit: '12',
        }),
      initialPageParam: 1,
      getNextPageParam: lastPage => {
        const currentPage = Number(lastPage.page);
        const totalPages = Number(lastPage.totalPages);

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    });

  const handleSearch = () => {
    setSubmittedFilters(filters);
  };

  const cars = data?.pages.flatMap(page => page.cars) ?? [];

  return (
    <main>
      <div className="container">
        <CarFilters brands={brands} onSearch={handleSearch} />

        {isLoading && <p>Loading...</p>}

        {!isLoading && <CarList cars={cars} />}

        {hasNextPage && (
          <div className={css.loadMoreWrapper}>
            <button
              className={css.loadMoreBtn}
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default CatalogClient;
