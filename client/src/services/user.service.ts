import { handleErrorMessage } from '@/lib/error';
import { httpClient } from '@/lib/httpClient';

import { UpdateUserDetails } from '@/types/user';

export const updateUser = async (
  userDetails: UpdateUserDetails,
  headers: { [key: string]: string }
) => {
  try {
    const response = await httpClient.put(
      `/users/${userDetails.id}`,
      userDetails,
      headers
    );

    if (!response.ok) throw new Error('Hubo un error');

    const { data } = await response.json();
    return { ok: true, data };
  } catch (error: any) {
    const message = handleErrorMessage(error);
    return { error: message };
  }
};
