import { Badge } from '../ui/badge';
import { SearchFiltersProps } from './search-filters';

import { CATEGORY_NAMES } from '@/lib/constants';

interface SearchFilterTagsProps extends SearchFiltersProps {}

const SearchFilterTags = ({ queryParamsString }: SearchFilterTagsProps) => {
  const currentQueryParams = new URLSearchParams(queryParamsString);

  const tags = [];

  const tParam = currentQueryParams.get('t') as 'sale' | 'auction';
  const cParam = currentQueryParams.get('c');
  const minParam = currentQueryParams.get('min');
  const maxParam = currentQueryParams.get('max');

  if (tParam === 'auction') tags.push('subasta');
  if (tParam === 'sale') tags.push('venta directa');
  if (cParam) tags.push(CATEGORY_NAMES[cParam as string]);
  if (minParam && !maxParam)
    tags.push(
      `mínimo: ${parseInt(minParam).toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
      })}`
    );
  if (maxParam && !minParam)
    tags.push(
      `máximo: ${parseInt(maxParam).toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
      })}`
    );

  if (minParam && maxParam)
    tags.push(
      `${parseInt(minParam).toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
      })} a ${parseInt(maxParam).toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
      })}`
    );

  return (
    <div className="flex flex-wrap gap-1 mt-3">
      {tags.map((tag) => (
        <Badge
          key={tag}
          className="bg-foreground text-background text-nowrap hover:bg-foreground"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default SearchFilterTags;
