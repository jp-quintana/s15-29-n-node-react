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

// import { updateUser } from '@/services/user.service';
import { updateUser } from '@/lib/actions/user.action';

import { editProfileSchema } from '@/lib/schemas';
import { cn } from '@/lib/utils';

const ProfileEditForm = () => {
  const { data: session, update } = useSession();
  const { toast } = useToast();

  console.log({ session });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<string | undefined>();

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: session?.user?.name || '',
      lastName: session?.user?.lastName || '',
      file: undefined,
    },
  });

  const fileRef = form.register('file');

  const getImageData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0];

    let files;
    let displayUrl;

    if (selectedFile) {
      const dataTransfer = new DataTransfer();

      dataTransfer.items.add(selectedFile);

      files = dataTransfer.files;
      displayUrl = URL.createObjectURL(selectedFile);
    }

    return { files, displayUrl };
  };

  const onSubmit = async (values: z.infer<typeof editProfileSchema>) => {
    // const result = await updateUser(
    //   { id: session?.user?.id as string, ...values },
    //   {
    //     Authorization: `Bearer ${session?.user?.accessToken}`,
    //   }
    // );

    if (session?.user) {
      setIsLoading(true);

      let formData = new FormData();

      formData.append('id', session.user.id);
      formData.append('name', values.name);
      formData.append('lastName', values.lastName);

      if (values?.file?.[0]) {
        formData.append('file', values.file[0]);
      }

      const result = await updateUser(formData);
      console.log({ result });
      if (result?.error) {
        toast({
          title: 'Los datos no fueron modificados',
          description: result.error,
        });
        setIsLoading(false);
        return;
      }
      if (session) {
        await update({
          ...session,
          user: { ...session.user, ...result },
        });
      }
      toast({
        title: 'La operación se ha realizado con éxito',
        description: 'Datos modificados',
      });
      setIsLoading(false);
      setIsEditing(false);
    }
  };

  return (
    session?.user && (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-12 mb-12"
        >
          <div className="flex gap-10 items-center justify-between">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <label
                      htmlFor={`${isEditing && 'upload'}`}
                      className={cn(isEditing && 'cursor-pointer')}
                    >
                      <ProfileAvatar
                        previewImage={preview}
                        className="w-28 h-28"
                      />
                      <Input
                        type="file"
                        multiple={false}
                        accept="image/jpeg, image/jpeg, image/png, image/webp"
                        className="hidden"
                        id="upload"
                        {...fileRef}
                        value={undefined}
                        onChange={(e) => {
                          const { files, displayUrl } = getImageData(e);
                          setPreview(displayUrl);
                          return field.onChange(files);
                        }}
                      />
                    </label>
                  </FormControl>
                  <FormMessage className="absolute p-0 m-0" />
                </FormItem>
              )}
            />
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
