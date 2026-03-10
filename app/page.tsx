import Link from 'next/link';
import css from './page.module.css';

function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link className={css.btn} href="/catalog">
          View Catalog
        </Link>
      </main>
    </div>
  );
}

export default Home;
