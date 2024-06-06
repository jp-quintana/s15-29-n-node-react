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
import { Textarea } from '../ui/textarea';

import { productUploadSchema } from '@/lib/schemas/product';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { CATEGORY_NAMES } from '@/lib/constants';

const PublishForm = () => {
  const [preview, setPreview] = useState<string | undefined>();

  const form = useForm<z.infer<typeof productUploadSchema>>({
    resolver: zodResolver(productUploadSchema),
    defaultValues: {
      name: '',
      description: '',
      file: undefined,
      category: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof productUploadSchema>) => {
    console.log({ values });
  };

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

  return (
    <Form {...form}>
      <form id="publish-form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-3 relative">
          <div className="flex-1">
            <div className="space-y-12 bg-secondary rounded-sm border p-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre del producto" {...field} />
                    </FormControl>
                    <FormMessage className="absolute p-0 m-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Detalles del producto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute p-0 m-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoría</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[200px] capitalize">
                          <SelectValue placeholder="Elige una categoría" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(CATEGORY_NAMES).map(([key, value]) => (
                          <SelectItem
                            key={key}
                            value={key}
                            className="capitalize"
                          >
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="absolute p-0 m-0" />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-end">
                <Button form="publish-form" type="submit">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
          <div className="sticky top-[120px] self-start px-3 w-[360px]">
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
                      accept="image/jpeg, image/jpeg, image/png, image/webp"
                      {...fileRef}
                      onChange={(e) => {
                        const { files, displayUrl } = getImageData(e);
                        setPreview(displayUrl);
                        return field.onChange(files);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Sube una imagen (solo se aceptan archivos .jpg, .jpeg, .webp
                    y .png).
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
