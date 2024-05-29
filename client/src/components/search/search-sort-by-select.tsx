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
  sortParam: string | undefined;
  queryParamsString: string;
}

const SearchSortBySelect = ({
  sortParam,
  queryParamsString,
}: SearchSortBySelectProps) => {
  const router = useRouter();

  const selectDefaultValue =
    sortParam && sortParam.length > 0 ? sortParam : 'featured';

  const handleSelect = (value: string) => {
    const updatedQueryParams = new URLSearchParams(queryParamsString);

    updatedQueryParams.set('sort', value);

    router.push(`search?${updatedQueryParams.toString()}`);
  };
  return (
    <Select defaultValue={selectDefaultValue} onValueChange={handleSelect}>
      <SelectTrigger className="max-w-[200px] w-full">
        <div className="truncate">
          <span>Ordenar por: </span>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="featured">Destacados</SelectItem>
          <SelectItem value="low">Menor precio</SelectItem>
          <SelectItem value="high">Mayor precio</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SearchSortBySelect;
