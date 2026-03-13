'use client';

import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <Oval
        height={48}
        width={48}
        color="#3470ff"
        secondaryColor="#dbe1ff"
        strokeWidth={4}
        strokeWidthSecondary={4}
        visible
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loader;
