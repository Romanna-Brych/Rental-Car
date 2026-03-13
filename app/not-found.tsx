import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notFoundWrapper">
      <h1>404</h1>
      <p>Page not found</p>

      <Link href="/" className="notFoundLink">
        Go back home
      </Link>
    </div>
  );
}
