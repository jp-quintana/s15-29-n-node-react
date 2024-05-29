'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { buttonVariants } from '../ui/button';
import ModeToggle from '../mode-toggle';
import NavDropdown from './nav-dropdown';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';

const NavOptions = () => {
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;

  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        {!isMobile && (
          <ul className={cn('flex space-x-4', isMobile && 'hidden')}>
            {isLoggedIn && (
              <li>
                <Link href="/profile" className={buttonVariants()}>
                  Mi cuenta
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <>
                <li>
                  <Link
                    href="/login"
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Ingresar
                  </Link>
                </li>
                <li>
                  <Link href="/register" className={buttonVariants()}>
                    Crear cuenta
                  </Link>
                </li>
              </>
            )}
            <li>
              <ModeToggle />
            </li>
          </ul>
        )}
        {isMobile && <NavDropdown isLoggedIn={isLoggedIn} />}
      </>
    )
  );
};

export default NavOptions;
