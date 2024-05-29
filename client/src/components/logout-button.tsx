'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
