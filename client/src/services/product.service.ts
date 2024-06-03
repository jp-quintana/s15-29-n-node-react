import { CustomError, handleErrorMessage } from '@/lib/error';
import { httpClient } from '@/lib/httpClient';

// TODO: remove session logic when endpoint is corrected
export const getProductsBySearch = async (
  queryParamsString: string,
  headers: { [key: string]: string }
) => {
  const currentQueryParams = new URLSearchParams(queryParamsString);

  const adaptedQueryParams = new URLSearchParams();

  const sortParams = currentQueryParams.get('sort') as 'asc' | 'desc';
  const pageParams = currentQueryParams.get('page') as string;

  adaptedQueryParams.set('order', sortParams);
  adaptedQueryParams.set('page', pageParams);
  adaptedQueryParams.set('limit', '12');

  try {
    const response = await httpClient.get(
      `/products?${adaptedQueryParams}`,
      headers
    );

    if (!response.ok) throw new CustomError('Hubo un error inesperado');

    const data = await response.json();
    return { ok: true, data };
  } catch (error: any) {
    const message = handleErrorMessage(error);
    return { error: message };
  }
};
