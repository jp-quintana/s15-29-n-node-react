import { httpClient } from '@/lib/httpClient';
import { LoginCredentials, RegisterCredentials } from '@/types/auth';

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await httpClient.post('/auth/register', credentials);
    return response.json();
  } catch (error: any) {}
};

export const register = async (credentials: RegisterCredentials) => {
  try {
    const response = await httpClient.post('/auth/register', credentials);
    return response.json();
  } catch (error: any) {}
};
