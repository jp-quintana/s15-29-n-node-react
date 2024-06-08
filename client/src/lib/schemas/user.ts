import { z } from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '../constants';

// TODO: update
export const editProfileSchema = z.object({
  name: z.string().min(1, { message: '¡El nombre está vacío!' }),
  lastName: z
    .string()
    // .min(1, { message: '¡El apellido está vacío!' })
    .optional(),
  file:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(FileList)
          .refine((files) => files?.length === 1, '¡Se requiere una imagen!')
          .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `¡El tamaño máximo del archivo es de 5MB!`
          )
          .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            '¡Solo se aceptan archivos .jpg, .jpeg, .png y .webp!'
          )
          .optional(),
});
