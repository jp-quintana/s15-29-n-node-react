'use client';

import { usePathname } from 'next/navigation';

import NavIconLink from '../nav-icon-link';

import { Pencil, CircleUserRound, Bell, Lock } from 'lucide-react';

const LINKS = [
  {
    id: 'edit',
    title: 'Editar perfil',
    href: '/dashboard/profile/edit',
    icon: <Pencil className="shrink-0" />,
  },
  {
    id: 'account-settings',
    title: 'Configuración de cuenta',
    href: '/dashboard/profile/account-settings',
    icon: <CircleUserRound className="shrink-0" />,
  },
  {
    id: 'notifications',
    title: 'Notificaciones',
    href: '/dashboard/profile/notifications',
    icon: <Bell className="shrink-0" />,
  },
  {
    id: 'privacy',
    title: 'Privacidad y datos',
    href: '/dashboard/profile/privacy',
    icon: <Lock className="shrink-0" />,
  },
];

interface ProfileNavProps {
  navIsCollapsed: boolean;
}

const ProfileNav = ({ navIsCollapsed }: ProfileNavProps) => {
  const pathname = usePathname();

  return (
    <div className="bg-background py-6 rounded-sm h-full flex">
      <ul className="flex flex-col space-y-6 mx-auto px-3 max-md:p-0 overflow-hidden">
        {LINKS.map((link) => (
          <NavIconLink
            key={link.id}
            id={link.id}
            title={link.title}
            href={link.href}
            icon={link.icon}
            pathname={pathname}
            textIsHidden={navIsCollapsed}
            linkSelectedStyles="font-bold"
            className="max-md:hover:bg-foreground max-md:hover:text-background"
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileNav;
