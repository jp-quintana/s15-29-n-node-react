import { z } from 'zod';

// TODO: update
export const editProfileSchema = z.object({
  name: z.string().min(1, { message: '¡El nombre está vacío!' }),
  lastName: z
    .string()
    // .min(1, { message: '¡El apellido está vacío!' })
    .optional(),
});
