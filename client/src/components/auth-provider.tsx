'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

import { Session } from 'next-auth';

interface AuthProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

const AuthProvider = ({ children, session }: AuthProviderProps) => {
  return (
    <SessionProvider session={session} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;
