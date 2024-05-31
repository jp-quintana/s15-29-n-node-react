import MaxWidthContainer from '@/components/max-width-container';
import SearchFilters from '@/components/search/search-filters';
import SearchList from '@/components/search/search-list';

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const queryParams = new URLSearchParams();

  const nameParam = searchParams.name;
  const sortParam = searchParams.sort;

  if (nameParam && nameParam.length > 0) queryParams.set('name', nameParam);
  if (sortParam && sortParam.length > 0) queryParams.set('sort', sortParam);

  const queryParamsString = queryParams.toString();

  return (
    <div className="min-h-screen py-20">
      <MaxWidthContainer className="flex flex-col space-y-4">
        <SearchFilters
          sortParam={sortParam}
          queryParamsString={queryParamsString}
        />
        <SearchList queryParamsString={queryParamsString} />
      </MaxWidthContainer>
    </div>
  );
};

export default Page;
