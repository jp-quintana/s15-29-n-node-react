'use client';

import Link from 'next/link';

import NavOptions from './nav-options';
import NavSearchInput from './nav-search-input';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-3 space-x-6">
      <Link href="/" className="font-bold text-xl h-[40px] flex items-center">
        <Image src="/logo-s15.png" alt="logo image" width={100} height={100} />
      </Link>
      <NavSearchInput />
      <NavOptions />
    </div>
  );
};

export default Nav;
