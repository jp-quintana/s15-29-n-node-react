'use client';

import SearchPagination from './search-pagination';

interface SearchListProps {
  queryParamsString: string;
}

const SearchList = ({ queryParamsString }: SearchListProps) => {
  // TODO: fetch products

  console.log({ queryParamsString });
  return (
    <div>
      <div>SearchList</div>
      <div>
        <SearchPagination />
      </div>
    </div>
  );
};

export default SearchList;
