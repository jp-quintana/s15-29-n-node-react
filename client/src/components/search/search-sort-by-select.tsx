'use client';

import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import { SearchFiltersProps } from './search-filters';

interface SearchSortBySelectProps extends SearchFiltersProps {}

const SearchSortBySelect = ({ queryParamsString }: SearchSortBySelectProps) => {
  const router = useRouter();

  const currentQueryParams = new URLSearchParams(queryParamsString);
  const sortParam = currentQueryParams.get('sort') as 'asc' | 'desc';

  const handleSelect = (value: string) => {
    const updatedQueryParams = new URLSearchParams(queryParamsString);

    updatedQueryParams.set('sort', value);

    router.push(`search?${updatedQueryParams.toString()}`);
  };

  return (
    <Select defaultValue={sortParam} onValueChange={handleSelect}>
      <SelectTrigger className="max-w-[200px] w-full">
        <div className="truncate">
          <span>Ordenar por: </span>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectItem value="featured">Destacados</SelectItem> */}
          <SelectItem value="asc">Menor precio</SelectItem>
          <SelectItem value="desc">Mayor precio</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchSortBySelect;
