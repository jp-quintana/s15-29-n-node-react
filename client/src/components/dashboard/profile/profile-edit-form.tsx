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
import ProfileAvatar from '@/components/profile-avatar';
import { useToast } from '@/components/ui/use-toast';

import { updateUser } from '@/services/user.service';

import { editProfileSchema } from '@/lib/schemas';

const ProfileEditForm = () => {
  const { data: session, update } = useSession();
  const { toast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: session?.user?.name || '',
      lastName: session?.user?.lastName || '',
    },
  });

  const onSubmit = async (values: z.infer<typeof editProfileSchema>) => {
    setIsLoading(true);
    const result = await updateUser(
      { id: session?.user?.id as string, ...values },
      {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      }
    );

    if (!result.ok) {
      toast({
        title: 'Los datos no fueron modificados',
        description: result.error,
      });
      setIsLoading(false);
      return;
    }

    if (session) {
      console.log({ values });
      await update({ ...session, user: { ...session.user, ...values } });
    }
    toast({
      title: 'Datos modificados',
      description: 'La operación se ha realizado con éxito',
    });

    setIsLoading(false);
    setIsEditing(false);
  };

  return (
    session?.user && (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-12 mb-12"
        >
          <div className="flex gap-10 items-center justify-between">
            <ProfileAvatar className="w-28 h-28" />
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)}>Editar</Button>
            )}
            {isEditing && (
              <div className="flex gap-1">
                <LoadingButton type="submit" isLoading={isLoading}>
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
