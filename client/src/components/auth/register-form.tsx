'use client';

import { useState } from 'react';

import { signIn } from 'next-auth/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { register } from '@/services/auth.service';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import LoadingButton from '../loading-button';
import PasswordInput from '../password-input';

import { registerSchema } from '@/lib/schemas';

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    const registerResult = await register(values);

    if (registerResult?.error) {
      console.log(registerResult.error);
      setIsLoading(false);
    }

    if (registerResult?.ok) {
      const loginResult = await signIn('credentials', {
        ...values,
        redirect: false,
      });

      if (loginResult?.ok) window.location.reload();

      if (loginResult?.error) {
        console.log(loginResult.error);
        setIsLoading(false);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="name"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="nombre" {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="apellido" {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@email.com" {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Confirmar contraseña</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <div className="w-full">
          <LoadingButton
            isLoading={isLoading}
            type="submit"
            className="w-full mt-5"
          >
            Registrate
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
