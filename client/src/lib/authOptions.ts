import { loginSchema } from '@/lib/schemas';
// import { login } from '@/services/auth.service';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from './actions/auth.action';

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
      if (session?.user && sessionToken?.image)
        session.user.image = sessionToken.image as string;

      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }
      if (user?.accessToken) token.accessToken = user.accessToken;
      if (user?.lastName) token.lastName = user.lastName;
      if (user?.image) token.image = user.image;
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

        const userData = await login({ email, password });

        if (!userData) {
          throw new Error('Hubo un error');
        }

        const user = {
          id: userData._id.toString(),
          name: userData.name,
          lastName: userData.lastName,
          email: userData.email,
          accessToken: '',
          image: userData.image,
        };

        return user;
      },
    }),
  ],
};
