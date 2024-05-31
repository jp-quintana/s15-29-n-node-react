import { handleErrorMessage } from '@/lib/error';
import { httpClient } from '@/lib/httpClient';

export const getAuctions = async () => {
  try {
    const response = await httpClient.get('/auctions');

    if (response.ok) return await response.json();
  } catch (error: any) {
    const message = handleErrorMessage(error);
    return { error: message };
  }
};
