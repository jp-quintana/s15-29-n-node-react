import { loginSchema } from '@/lib/schemas';
import { login } from '@/services/auth.service';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session, token: sessionToken }) {
      // console.log({ session, sessionToken });
      if (session?.user && sessionToken?.sub)
        session.user.id = sessionToken.sub;
      if (session?.user && sessionToken?.lastName)
        session.user.lastName = sessionToken.lastName as string;
      if (session?.user && sessionToken?.accessToken)
        session.user.accessToken = sessionToken.accessToken as string;
      return session;
    },
    async jwt({ token, user }) {
      // console.log({ token, user });
      if (user?.accessToken) token.accessToken = user.accessToken;
      if (user?.lastName) token.lastName = user.lastName;
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const validateFields = loginSchema.safeParse({ email, password });

        if (!validateFields.success) {
          throw new Error('Campos de inicio de sesión no válidos.');
        }

        let user;

        const result = await login({ email, password });

        if (result.ok) {
          const { data } = result;
          user = {
            id: data.user.id,
            name: data.user.name,
            lastName: data.user.lastName,
            email: data.user.email,
            accessToken: data.token,
          };

          return user;
        }

        throw new Error(result.error);

        // const user = {
        //   id: '1',
        //   name: 'mock',
        //   lastName: 'mock',
        //   email: 'mock@mock.com',
        //   accessToken:
        //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        // };

        // if (user) {
        //   return user;
        // }

        // // return null;
        // throw new Error();
      },
    }),
  ],
};
