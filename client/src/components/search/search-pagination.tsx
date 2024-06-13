import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

interface SearchPaginationProps {
  queryParamsString: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null | number;
  page: number;
  // pagingCounter: number;
  prevPage: null | number;
  totalDocs: number;
  totalPages: number;
}

const SearchPagination = ({
  queryParamsString,
  hasNextPage,
  hasPrevPage,
  limit,
  nextPage,
  page,
  // pagingCounter,
  prevPage,
  totalDocs,
  totalPages,
}: SearchPaginationProps) => {
  // TODO: update logic
  return (
    <Pagination>
      <PaginationContent>
        {hasPrevPage && (
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {nextPage && (
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default SearchPagination;
