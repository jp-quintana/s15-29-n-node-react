import { z } from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '../constants';

// TODO: update
export const editProfileSchema = z
  .object({
    name: z.string().min(1, { message: '¡El nombre está vacío!' }),
    lastName: z.string().min(1, { message: '¡El apellido está vacío!' }),
    // .optional(),
    file:
      typeof window === 'undefined'
        ? z.any()
        : z.instanceof(FileList).optional(),
  })
  .superRefine(({ file }, ctx) => {
    if (file?.[0]) {
      if (file?.[0]?.size >= MAX_FILE_SIZE) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '¡El tamaño máximo del archivo es de 5MB',
          path: ['file'],
        });
      }

      if (!ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '¡El tamaño máximo del archivo es de 5MB',
          path: ['file'],
        });
      }
    }
  });
