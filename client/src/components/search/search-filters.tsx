import SearchFilterTags from './search-filter-tags';
import SearchFiltersSheet from './search-filters-sheet';
import SearchSortBySelect from './search-sort-by-select';

export interface SearchFiltersProps {
  queryParamsString: string;
}

const SearchFilters = ({ queryParamsString }: SearchFiltersProps) => {
  return (
    <div className="flex space-x-4 justify-between">
      <div className="relative flex items-center">
        <SearchFiltersSheet queryParamsString={queryParamsString} />
        <SearchFilterTags queryParamsString={queryParamsString} />
      </div>
      <SearchSortBySelect queryParamsString={queryParamsString} />
    </div>
  );
};

export default SearchFilters;
