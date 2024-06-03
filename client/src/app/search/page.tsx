import MaxWidthContainer from '@/components/max-width-container';
import SearchFilters from '@/components/search/search-filters';
import SearchList from '@/components/search/search-list';

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const queryParams = new URLSearchParams();

  const tParam =
    searchParams.t?.toLowerCase() === 'auction' ? 'auction' : 'sale';
  const sParam = searchParams.s?.toLowerCase();
  const cParam =
    typeof searchParams.c === 'string' &&
    [
      'art',
      'antiques',
      'collectibles',
      'technology',
      'vehicles',
      'real-estate',
    ].includes(searchParams.c.toLowerCase())
      ? searchParams.c.toLowerCase()
      : undefined;
  const sortParam =
    searchParams.sort?.toLowerCase() === 'desc' ? 'desc' : 'asc';
  const pageParam =
    typeof searchParams.pageParam === 'string' &&
    /^\d+$/.test(searchParams.pageParam)
      ? searchParams.pageParam
      : '1';
  const minParam =
    typeof searchParams.min === 'string' && /^\d+$/.test(searchParams.min)
      ? searchParams.min
      : undefined;
  const maxParam =
    typeof searchParams.max === 'string' && /^\d+$/.test(searchParams.max)
      ? searchParams.max
      : undefined;

  queryParams.set('t', tParam);
  queryParams.set('sort', sortParam);
  queryParams.set('page', pageParam);
  if (sParam && sParam.length > 0) queryParams.set('s', sParam);
  if (cParam) queryParams.set('c', cParam);
  if (minParam) queryParams.set('min', minParam);
  if (maxParam) queryParams.set('max', maxParam);

  const queryParamsString = queryParams.toString();

  return (
    <div className="min-h-screen py-20">
      <MaxWidthContainer className="flex flex-col space-y-4">
        <SearchFilters queryParamsString={queryParamsString} />
        <SearchList queryParamsString={queryParamsString} />
      </MaxWidthContainer>
    </div>
  );
};

export default Page;
