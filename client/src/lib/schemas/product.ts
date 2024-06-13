import { z } from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '../constants';

// TODO: update schema
export const productUploadSchema = z
  .object({
    name: z.string().min(1, { message: '¡El nombre está vacío!' }),
    description: z
      .string()
      .min(10, {
        message: '¡La descripción debe contener al menos 10 caracteres!',
      })
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
    price: z.coerce.number({ message: '¡El precio está vacío!' }),
    category: z.string({
      message: '¡Se debe seleccionar una opción!',
    }),
    is_auction: z.boolean(),
    check_dates: z.boolean(),
    start_date: z.date().optional(),
    end_date: z.date().optional(),
  })
  .superRefine(({ is_auction, check_dates, start_date, end_date }, ctx) => {
    if (check_dates && is_auction && !start_date)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '¡Se requiere fecha de inicio!',
        path: ['start_date'],
      });

    if (check_dates && is_auction && !end_date)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '¡Se requiere fecha de finalización!',
        path: ['end_date'],
      });
  });
