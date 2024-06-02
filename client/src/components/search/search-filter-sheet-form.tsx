'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const types = [
  {
    id: 'sale',
    label: 'Venta directa',
  },
  {
    id: 'auction',
    label: 'Subasta',
  },
] as const;

const FormSchema = z.object({
  // types: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: 'You have to select at least one item.',
  // }),
  type: z.string().optional(),
});

const SearchFilterSheetForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: 'sale',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  console.log(form.getValues());

  return (
    <Form {...form}>
      <form
        id="search-filter-sheet-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
              </div>
              {types.map((type) => (
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
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
};

export default SearchFilterSheetForm;
