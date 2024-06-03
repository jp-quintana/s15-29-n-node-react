'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';

const TYPES = [
  {
    id: 'sale',
    label: 'Venta directa',
  },
  {
    id: 'auction',
    label: 'Subasta',
  },
] as const;

const CATEGORIES = [
  {
    id: 'art',
    label: 'Arte',
  },
  {
    id: 'antiques',
    label: 'Antigüedades',
  },
  {
    id: 'collectibles',
    label: 'Coleccionables',
  },
  {
    id: 'technology',
    label: 'Tecnología',
  },
  {
    id: 'vehicles',
    label: 'Vehículos',
  },
  {
    id: 'real-estate',
    label: 'Propiedades',
  },
] as const;

interface SearchFilterSheetFormProps {
  handleClose: () => void;
}

const SearchFilterSheetForm = ({ handleClose }: SearchFilterSheetFormProps) => {
  const form = useForm<z.infer<typeof searchFiltersSchema>>({
    resolver: zodResolver(searchFiltersSchema),
    defaultValues: {
      type: 'sale',
      category: undefined,
      min: '',
      max: '',
    },
  });

  const {
    formState: { errors },
  } = form;

  // console.log(errors);

  function onSubmit(data: z.infer<typeof searchFiltersSchema>) {
    console.log({ data });
    console.log({ errors });
    handleClose();
  }

  return (
    <Form {...form}>
      <form
        id="search-filter-sheet-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-sm font-bold">
                  Tipo de venta
                </FormLabel>
              </div>
              {TYPES.map((type) => (
                <FormItem
                  key={type.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value === type.id}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange(type.id)
                          : field.onChange(undefined);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{type.label}</FormLabel>
                </FormItem>
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-sm font-bold">Categorias</FormLabel>
              </div>
              {CATEGORIES.map((category) => (
                <FormItem
                  key={category.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value === category.id}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange(category.id)
                          : field.onChange(undefined);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {category.label}
                  </FormLabel>
                </FormItem>
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <div className="mb-4">
            <FormLabel className="text-sm font-bold">Precio</FormLabel>
          </div>
          <div className="flex gap-x-4 items-center">
            <FormField
              control={form.control}
              name="min"
              render={({ field }) => (
                <FormItem className="max-w-20">
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="min"
                      className="text-xs"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <p>-</p>
            <FormField
              control={form.control}
              name="max"
              render={({ field }) => (
                <FormItem className="max-w-20">
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="max"
                      className="text-xs"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-sm font-medium text-destructive mt-3">
            {errors.min ? (
              <p>{errors['min'].message}</p>
            ) : (
              errors.max && <p>{errors['max'].message}</p>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SearchFilterSheetForm;
