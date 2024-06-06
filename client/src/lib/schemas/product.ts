import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const productUploadSchema = z.object({
  name: z.string().min(1, { message: '¡El nombre está vacío!' }),
  description: z
    .string()
    .min(10, { message: '¡La descripción está vacía!' })
    .max(500, {
      message: '¡La descripción no debe superar los 500 caracteres!',
    }),
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
          ),
  category: z.string({
    message: '¡Se debe seleccionar una opción!',
  }),
});
