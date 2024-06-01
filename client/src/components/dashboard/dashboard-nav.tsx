'use client';

import { usePathname } from 'next/navigation';

import LogoutButton from '../logout-button';

import { Home, Handshake, Gavel, AreaChart } from 'lucide-react';

import DashboardNavLink from './dashboard-nav-link';

const LINKS = [
  {
    id: 'profile',
    title: 'Mi perfil',
    href: '/dashboard/profile',
    icon: <Home className="md:hidden" />,
  },
  {
    id: 'auctions',
    title: 'Mis subastas',
    href: '/dashboard/auctions',
    icon: <Gavel className="md:hidden" />,
  },
  {
    id: 'sales',
    title: 'Mis ventas directas',
    href: '/dashboard/sales',
    icon: <Handshake className="md:hidden" />,
  },
  {
    id: 'analytics',
    title: 'Métricas',
    href: '/dashboard/analytics',
    icon: <AreaChart className="md:hidden" />,
  },
];

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center">
      <ul className="flex space-x-6 items-center max-md:space-x-4">
        {LINKS.map((link) => (
          <DashboardNavLink
            key={link.id}
            id={link.id}
            title={link.title}
            href={link.href}
            icon={link.icon}
            pathname={pathname}
          />
        ))}
        {/* <li>
          <Link
            href="/dashboard/profile"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'p-0 max-md:leading-none max-md:hover:bg-primary max-md:hover:text-white max-md:h-auto max-md:p-1 max-md:rounded-full',
              pathname === '/dashboard/profile'
                ? 'underline'
                : 'text-foreground'
            )}
          >
            <span className="max-md:hidden">Mi perfil</span>
            <Home className="md:hidden" />
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/auctions"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'px-0',
              pathname === '/dashboard/auctions'
                ? 'underline'
                : 'text-foreground'
            )}
          >
            <span>Mis subastas</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/sales"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'px-0',
              pathname === '/dashboard/sales' ? 'underline' : 'text-foreground'
            )}
          >
            <span>Mis ventas directas</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/analytics"
            className={cn(
              buttonVariants({ variant: 'link' }),
              'px-0',
              pathname === '/dashboard/analytics'
                ? 'underline'
                : 'text-foreground'
            )}
          >
            <span>Métricas</span>
          </Link>
        </li> */}
      </ul>
      <LogoutButton />
    </div>
  );
};

export default DashboardNav;
