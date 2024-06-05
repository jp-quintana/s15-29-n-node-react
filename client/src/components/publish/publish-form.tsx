'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2),
  file: typeof window === 'undefined' ? z.any() : z.instanceof(FileList),
});

const PublishForm = () => {
  const [preview, setPreview] = useState<string | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      file: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  const fileRef = form.register('file');

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0];

    if (!selectedFile) return;

    const displayUrl = URL.createObjectURL(selectedFile);
    setPreview(displayUrl);
  };

  return (
    <Form {...form}>
      <form id="publish-form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-3 relative">
          <div className="flex-1">
            <div className="space-y-8 bg-secondary rounded-sm border p-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button form="publish-form" type="submit">
                Submit
              </Button>
            </div>
          </div>
          <div className="sticky top-[120px] self-start px-3">
            {preview ? (
              <Image
                src={preview}
                alt="uploaded-image"
                width={240}
                height={240}
                className="object-contain rounded-sm border h-[240px] bg-secondary"
              />
            ) : (
              <div className="bg-secondary rounded-sm border h-[240px] w-[240px] flex justify-center items-center">
                <ImageIcon size={36} />
              </div>
            )}
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Imagen</FormLabel>
                  <FormControl className="mt-10">
                    <Input
                      type="file"
                      multiple={false}
                      accept="image/jpeg, image/png"
                      {...fileRef}
                      onChange={(e) => {
                        handleSelectFile(e);
                        return field.onChange(
                          e.target?.files?.[0] ?? undefined
                        );
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Sube una imagen (solo se aceptan archivos .jpg y .png).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PublishForm;