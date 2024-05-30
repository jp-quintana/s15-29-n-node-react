import { CustomError, handleErrorMessage } from '@/lib/error';
import { httpClient } from '@/lib/httpClient';
import { registerSchema } from '@/lib/schemas';
import { LoginCredentials, RegisterCredentials } from '@/types/auth';

export const login = async (credentials: LoginCredentials) => {
  try {
    // TODO: pedir manejo de error del lado del server
    const response = await httpClient.post('/auth/login', credentials);

    if (!response.ok) throw new CustomError('Hubo un error inesperado');

    return { ok: true, data: await response.json() };
  } catch (error: any) {
    const message = handleErrorMessage(error);
    return { error: message };
  }
};

export const register = async (credentials: RegisterCredentials) => {
  try {
    const validateFields = registerSchema.safeParse(credentials);

    if (!validateFields.success) {
      throw new CustomError('Campos de registro no válidos.');
      // throw new Error('Campos de registro no válidos.');
    }

    // TODO: pedir manejo de error del lado del server
    const response = await httpClient.post('/auth/register', credentials);

    if (!response.ok) throw new CustomError('Hubo un error inesperado');
    // if (!response.ok) throw new Error('Hubo un error inesperado');

    const { data } = await response.json();
    return { ok: true, data };
  } catch (error: any) {
    const message = handleErrorMessage(error);
    return { error: message };
    // return { error: error.message };
  }
};
