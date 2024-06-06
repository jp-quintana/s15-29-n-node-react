'use client';

import { useEffect, useState } from 'react';

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
import { CalendarIcon, Image as ImageIcon } from 'lucide-react';
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
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { cn } from '@/lib/utils';

const PublishForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preview, setPreview] = useState<string | undefined>();
  // const [previewName, setPreviewName] = useState<string | undefined>();

  const form = useForm<z.infer<typeof productUploadSchema>>({
    resolver: zodResolver(productUploadSchema),
    defaultValues: {
      name: '',
      description: '',
      file: undefined,
      category: undefined,
      is_auction: false,
      start_date: undefined,
      end_date: undefined,
    },
  });

  const fileRef = form.register('file');
  const { watch, trigger, getValues, resetField, clearErrors } = form;
  const isAuction = watch('is_auction');

  const onSubmit = (values: z.infer<typeof productUploadSchema>) => {
    console.log({ values });
  };

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

  const handleNextStep = async () => {
    const check = await trigger(['name', 'description', 'file', 'category'], {
      shouldFocus: true,
    });

    if (!check) return;
    clearErrors(['start_date', 'end_date']);
    setCurrentStep(1);
  };

  useEffect(() => {
    if (getValues('end_date')) resetField('end_date');
  }, [watch('start_date')]);

  return (
    <Form {...form}>
      <form id="publish-form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-3 relative">
          <div className="flex-1">
            <div className="space-y-12 bg-secondary rounded-sm border p-6">
              <>
                {currentStep === 0 && (
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nombre del producto"
                              {...field}
                            />
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
                              {Object.entries(CATEGORY_NAMES).map(
                                ([key, value]) => (
                                  <SelectItem
                                    key={key}
                                    value={key}
                                    className="capitalize"
                                  >
                                    {value}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage className="absolute p-0 m-0" />
                        </FormItem>
                      )}
                    />
                  </>
                )}
                {currentStep === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="start_date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Fecha de inicio</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={'outline'}
                                  className={cn(
                                    'w-[240px] pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground'
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'dd/MM/yyyy')
                                  ) : (
                                    <span>Elegí una fecha</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => {
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);

                                  const thirtyDaysFromToday = new Date(today);
                                  thirtyDaysFromToday.setDate(
                                    today.getDate() + 30
                                  );
                                  thirtyDaysFromToday.setHours(23, 59, 59, 999);

                                  return (
                                    date < today || date > thirtyDaysFromToday
                                  );
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Puedes programar la subasta con hasta un mes de
                            anticipación.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="end_date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Fecha de finalización</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  disabled={!getValues('start_date')}
                                  variant={'outline'}
                                  className={cn(
                                    'w-[240px] pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground'
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'dd/MM/yyyy')
                                  ) : !getValues('start_date') ? (
                                    <span className="truncate">
                                      Elegí primero una fecha de inicio
                                    </span>
                                  ) : (
                                    <span>Elegí una fecha</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => {
                                  const startDate = new Date(
                                    getValues('start_date') as Date
                                  );
                                  startDate.setHours(0, 0, 0, 0);

                                  const tenDaysFromStartDate = new Date(
                                    startDate
                                  );
                                  tenDaysFromStartDate.setDate(
                                    startDate.getDate() + 10
                                  );
                                  tenDaysFromStartDate.setHours(
                                    23,
                                    59,
                                    59,
                                    999
                                  );

                                  return (
                                    date < startDate ||
                                    date > tenDaysFromStartDate
                                  );
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            La duración máxima de la subasta es de 10 días, con
                            un mínimo de 1 día desde su creación.
                          </FormDescription>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </>
              <div className="flex items-center justify-between">
                {currentStep === 0 && (
                  <FormField
                    control={form.control}
                    name="is_auction"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="is_auction"
                            />
                            <Label htmlFor="is_auction">Es subasta</Label>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )}
                {currentStep === 1 && (
                  <Button onClick={() => setCurrentStep(0)}>Atrás</Button>
                )}
                <Button
                  form="publish-form"
                  type="submit"
                  onClick={
                    isAuction && currentStep === 0 ? handleNextStep : undefined
                  }
                >
                  {isAuction && currentStep === 0 ? 'Siguiente' : 'Crear'}
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
            {currentStep === 0 && (
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
                      Sube una imagen (solo se aceptan archivos .jpg, .jpeg,
                      .webp y .png).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PublishForm;
