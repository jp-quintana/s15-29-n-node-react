'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface LogoutButtonProps {
  className?: string;
}

const LogoutButton = ({ className }: LogoutButtonProps) => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Button className={cn(className)} onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
};

export default LogoutButton;
