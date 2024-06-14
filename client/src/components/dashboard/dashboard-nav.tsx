'use client';

import { usePathname } from 'next/navigation';

import LogoutButton from '../logout-button';

import { Home, Handshake, Gavel, AreaChart } from 'lucide-react';

import NavIconLink from './nav-icon-link';

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
      <ul className="flex space-x-6 items-center max-md:space-x-4 rounded-md md:px-3 border">
        {LINKS.map((link) => (
          <NavIconLink
            key={link.id}
            id={link.id}
            title={link.title}
            href={link.href}
            icon={link.icon}
            pathname={pathname}
            variant="link"
            linkSelectedStyles="max-md:bg-primary max-md:text-background"
            listItemStyles="max-md:min-w-16 max-md:flex max-md:justify-center"
            className="max-md:hover:bg-secondary"
          />
        ))}
      </ul>
      <LogoutButton className="max-sm:hidden" />
    </div>
  );
};

export default DashboardNav;
