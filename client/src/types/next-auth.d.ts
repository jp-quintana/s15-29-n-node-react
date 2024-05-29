import { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & {
      id: string;
      lastName: string;
      accessToken: string;
    };
  }

  interface User extends DefaultUser {
    accessToken?: string;
    lastName?: string;
  }
}
