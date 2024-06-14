'use client';

import { usePathname } from 'next/navigation';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

const AuthCard = () => {
  const pathname = usePathname();

  const isLogin = pathname === '/login';

  return (
    <div>
      <p className="font-bold text-3xl mb-5">
        {isLogin ? 'Login' : 'Registro'}
      </p>
      <div className="flex flex-col items-center w-full">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        {isLogin ? (
          <Link
            href="/register"
            className={buttonVariants({ variant: 'link' })}
          >
            ¿No tienes cuenta todavia?
          </Link>
        ) : (
          <Link href="/login" className={buttonVariants({ variant: 'link' })}>
            ¿Ya tienes cuenta?
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
