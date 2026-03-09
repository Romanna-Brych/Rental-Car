import Link from 'next/link';
import styles from './page.module.css';

function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Find your perfect rental car</h1>
        <h2>Reliable and budget-friendly rentals for any journey</h2>
        <Link href="/catalog">View Catalog</Link>
      </main>
    </div>
  );
}

export default Home;
