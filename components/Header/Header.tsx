'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrapper}>
          <Link href="/" className={css.logo}>
            <Image
              src="/logo.svg"
              width={104}
              height={16}
              className={css.logoImg}
              alt="logo"
            />
          </Link>

          <nav className={css.nav}>
            <Link
              className={`${css.link} ${pathname === '/' ? css.active : ''}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${css.link} ${pathname === '/catalog' ? css.active : ''}`}
              href="/catalog"
            >
              Catalog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
