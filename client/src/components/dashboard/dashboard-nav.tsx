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
      </ul>
      <LogoutButton />
    </div>
  );
};

export default DashboardNav;
