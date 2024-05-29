import SearchSortBySelect from './search-sort-by-select';

interface SearchFiltersProps {
  sortParam: string | undefined;
  queryParamsString: string;
}

const SearchFilters = ({
  sortParam,
  queryParamsString,
}: SearchFiltersProps) => {
  return (
    <div className="flex space-x-4 justify-end">
      <SearchSortBySelect
        sortParam={sortParam}
        queryParamsString={queryParamsString}
      />
    </div>
  );
};

export default SearchFilters;
