import SearchFiltersSheet from './search-filters-sheet';
import SearchSortBySelect from './search-sort-by-select';

interface SearchFiltersProps {
  sParam: string | undefined;
  tParam: 'sale' | 'auction';
  sortParam: string | undefined;
  queryParamsString: string;
}

const SearchFilters = ({
  sParam,
  tParam,
  sortParam,
  queryParamsString,
}: SearchFiltersProps) => {
  return (
    <div className="flex space-x-4 justify-between">
      <div className="">
        <SearchFiltersSheet />
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
