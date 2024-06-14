import { z } from 'zod';

export const searchFiltersSchema = z.object({
  type: z.string().optional(),
  category: z.string().optional(),
  min: z
    .string()
    .refine((val) => val === '' || /^\d+$/.test(val), {
      message: '¡Los valores deben ser números enteros!',
    })
    .optional(),
  max: z
    .string()
    .refine((val) => val === '' || /^\d+$/.test(val), {
      message: '¡Los valores deben ser números enteros!',
    })
    .optional(),
});
