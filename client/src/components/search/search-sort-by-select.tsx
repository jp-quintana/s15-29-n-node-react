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

interface SearchSortBySelectProps {
  sortParam: 'asc' | 'desc';
  queryParamsString: string;
}

const SearchSortBySelect = ({
  sortParam,
  queryParamsString,
}: SearchSortBySelectProps) => {
  const router = useRouter();

  console.log({ queryParamsString });

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
