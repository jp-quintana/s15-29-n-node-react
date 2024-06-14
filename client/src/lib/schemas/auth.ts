import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: '¡El correo electrónico está vacío!' })
    .email({ message: '¡El correo electrónico no es válido!' }),
  password: z.string().min(1, { message: '¡La contraseña está vacía!' }),
});

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: '¡El nombre está vacío!' }),
    lastName: z.string().min(1, { message: '¡El apellido está vacío!' }),
    email: z
      .string()
      .min(1, { message: '¡El correo electrónico está vacío!' })
      .email({ message: '¡El correo electrónico no es válido!' }),
    password: z.string().min(1, { message: '¡La contraseña está vacía!' }),
    confirmPassword: z
      .string()
      .min(1, { message: '¡Debe confirmar la contraseña!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '¡Las contraseñas no coinciden!',
    path: ['confirmPassword'],
  });
