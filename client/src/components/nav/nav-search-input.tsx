'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { Search } from 'lucide-react';

const NavSearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sParam = searchParams.get('s');

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formattedQueryString = inputValue.replace(/\s+/g, '-').trim();

    if (inputValue.length > 0) {
      router.push(`/search?s=${inputValue}&t=sale`);
    } else {
      router.push(`/search?t=sale`);
    }
  };

  useEffect(() => {
    if (pathname === '/search' && sParam && sParam.length > 0) {
      setInputValue(decodeURIComponent(sParam));
    }

    if (pathname !== '/search' && inputValue.length > 0) {
      setInputValue('');
    }
  }, [pathname]);

  return (
    <div className="flex-1 min-w-0">
      <form onSubmit={handleSubmit} className="w-auto flex">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Buscar productos..."
          className="rounded-r-none focus-visible:ring-0 w-auto focus-visible:ring-offset-0 max-md:flex-1 min-w-0"
        />
        <Button type="submit" className="rounded-l-none h-10 w-10 p-0">
          <Search />
        </Button>
      </form>
    </div>
  );
};

export default NavSearchInput;
