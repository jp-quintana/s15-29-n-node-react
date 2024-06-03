import SearchFiltersSheet from './search-filters-sheet';
import SearchSortBySelect from './search-sort-by-select';

export interface SearchFiltersProps {
  queryParamsString: string;
}

const SearchFilters = ({ queryParamsString }: SearchFiltersProps) => {
  return (
    <div className="flex space-x-4 justify-between">
      <div className="">
        <SearchFiltersSheet queryParamsString={queryParamsString} />
        {/* TODO: add search filter tags */}
      </div>
      <SearchSortBySelect queryParamsString={queryParamsString} />
    </div>
  );
};

export default SearchFilters;
