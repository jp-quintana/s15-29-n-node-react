import MaxWidthContainer from '@/components/max-width-container';
import PurchaseDetails from '@/components/purchase/purchase-details';
import PurchaseOptions from '@/components/purchase/purchase-options';

const PurchasePage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) => {
  const result = await fetch(
    ((process.env.NEXT_API_BASE_URL as string) +
      '/post/' +
      params.id) as string,
    { cache: 'no-store' }
  );

  const data = await result.json();

  const { post } = data;

  const bid = searchParams?.bid;

  return (
    <MaxWidthContainer className="py-20 min-h-screen">
      <div className="flex justify-between gap-16 max-md:flex-col-reverse">
        <div className="flex-1">
          <h1 className="text-lg font-bold mb-8">¿Cómo querés pagar?</h1>
          <PurchaseOptions
            id={params.id}
            isAuction={post.isAuction}
            bid={bid}
          />
        </div>
        <PurchaseDetails
          name={post.name}
          image={post.image}
          isAuction={post.isAuction}
          bid={bid}
          price={post.price}
        />
      </div>
    </MaxWidthContainer>
  );
};

export default PurchasePage;
