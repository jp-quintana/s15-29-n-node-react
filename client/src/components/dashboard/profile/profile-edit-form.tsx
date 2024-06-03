'use client';

import { useState } from 'react';

import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import LoadingButton from '@/components/loading-button';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { editProfileSchema } from '@/lib/schemas';

const ProfileEditForm = () => {
  const { data: session } = useSession();

  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: session?.user?.name || '',
      lastName: session?.user?.lastName || '',
    },
  });

  const onSubmit = (values: z.infer<typeof editProfileSchema>) => {
    setIsEditing(false);
    console.log(values);
  };

  return (
    session?.user && (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
          <div className="flex gap-10 items-center justify-between">
            <div className="w-28 h-28 rounded-full bg-gray-700" />
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)}>Editar</Button>
            )}
            {isEditing && (
              <div className="flex gap-1">
                <LoadingButton type="submit" isLoading={false}>
                  Guardar cambios
                </LoadingButton>
              </div>
            )}
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nombre"
                    {...field}
                    disabled={!isEditing}
                  />
                </FormControl>
                <FormMessage className="absolute p-0 m-0" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="apellido"
                    {...field}
                    disabled={!isEditing}
                  />
                </FormControl>
                <FormMessage className="absolute p-0 m-0" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    )
  );
};

export default ProfileEditForm;
