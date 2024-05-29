'use client';

import Link from 'next/link';
import NavOptions from './nav-options';
import NavSearchInput from './nav-search-input';

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-3 space-x-6">
      <Link href="/" className="font-bold text-xl h-[40px] flex items-center">
        LOGO
      </Link>
      <NavSearchInput />
      <NavOptions />
    </div>
  );
};

export default Nav;
