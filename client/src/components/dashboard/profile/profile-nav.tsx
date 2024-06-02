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

const ProfileNav = () => {
  const pathname = usePathname();

  return (
    <div className="bg-background p-2 rounded-sm h-full">
      <ul className="flex flex-col space-y-6">
        {LINKS.map((link) => (
          <NavIconLink
            key={link.id}
            id={link.id}
            title={link.title}
            href={link.href}
            icon={link.icon}
            pathname={pathname}
            linkSelectedStyles="font-bold"
            className="max-md:hover:bg-foreground"
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileNav;
