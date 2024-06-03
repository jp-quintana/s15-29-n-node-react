import SearchFiltersSheet from './search-filters-sheet';
import SearchSortBySelect from './search-sort-by-select';

interface SearchFiltersProps {
  sParam: string | undefined;
  tParam: 'sale' | 'auction';
  cParam:
    | 'art'
    | 'antiques'
    | 'collectibles'
    | 'technology'
    | 'vehicles'
    | 'real-estate'
    | undefined;
  sortParam: 'asc' | 'desc';
  pageParam: string;
  minParam: string | undefined;
  maxParam: string | undefined;
  queryParamsString: string;
}

const SearchFilters = ({
  sParam,
  tParam,
  cParam,
  sortParam,
  pageParam,
  minParam,
  maxParam,
  queryParamsString,
}: SearchFiltersProps) => {
  return (
    <div className="flex space-x-4 justify-between">
      <div className="">
        <SearchFiltersSheet
          tParam={tParam}
          cParam={cParam}
          minParam={minParam}
          maxParam={maxParam}
          queryParamsString={queryParamsString}
        />
        {/* TODO: add search filter tags */}
      </div>
      <SearchSortBySelect
        sortParam={sortParam}
        queryParamsString={queryParamsString}
      />
    </div>
  );
};

export default SearchFilters;
