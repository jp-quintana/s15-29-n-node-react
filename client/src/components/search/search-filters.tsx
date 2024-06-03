import SearchFilterTags from './search-filter-tags';
import SearchFiltersSheet from './search-filters-sheet';
import SearchSortBySelect from './search-sort-by-select';

export interface SearchFiltersProps {
  queryParamsString: string;
}

const SearchFilters = ({ queryParamsString }: SearchFiltersProps) => {
  return (
    <div>
      <div className="flex space-x-4 justify-between">
        <SearchFiltersSheet queryParamsString={queryParamsString} />
        <SearchSortBySelect queryParamsString={queryParamsString} />
      </div>
      <SearchFilterTags queryParamsString={queryParamsString} />
    </div>
  );
};

export default SearchFilters;
