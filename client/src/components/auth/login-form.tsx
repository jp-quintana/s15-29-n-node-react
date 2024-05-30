'use client';

import { useState } from 'react';

import { signIn } from 'next-auth/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
import { useToast } from '@/components/ui/use-toast';

import { loginSchema } from '@/lib/schemas';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
    });

    if (result?.ok) window.location.reload();
    if (result?.error) {
      console.log(result.error);
      toast({
        title: 'Hubo un error',
        description: result.error,
      });
      setIsLoading(false);
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
        <div className="w-full">
          <LoadingButton
            isLoading={isLoading}
            type="submit"
            className="w-full mt-5"
          >
            Iniciar
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
