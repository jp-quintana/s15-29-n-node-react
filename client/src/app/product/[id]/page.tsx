import MaxWidthContainer from '@/components/max-width-container';
import ProductCarousel from '@/components/product-detail/product-carousel';
import ProductPaymentDetails from '@/components/product-detail/product-payment-details';
import { Button } from '@/components/ui/button';

import { Share, Info } from 'lucide-react';

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const result = await fetch(
    ((process.env.NEXT_API_BASE_URL as string) +
      '/post/' +
      params.id) as string,
    { cache: 'no-store' }
  );

  const data = await result.json();

  const { post } = data;

  return (
    <MaxWidthContainer className="py-20 min-h-screen">
      <h1 className="text-xl font-bold">INMUEBLES en CABA y Bs As.</h1>
      <div className="flex items-center gap-x-3 mt-2">
        <Button className="flex items-center gap-x-2" variant="outline">
          <Share className="text-primary" />
          Compartir
        </Button>
        <Button className="flex items-center gap-x-2" variant="outline">
          <Info className="text-primary" />
          Contacto
        </Button>
      </div>
      <div className="mt-10">
        <p className="font-medium">
          Cochera en microcentro ideal para tramitar por la zona
        </p>
        <div className="flex mt-3 gap-20 justify-between">
          <div className="flex-1 flex justify-center">
            <ProductCarousel />
          </div>
          <ProductPaymentDetails />
        </div>
        <div className="text-sm mt-10">
          <div className="inline-flex flex-col">
            <p className="text-sm uppercase font-bold">Descripcion detallada</p>
            <div className="h-1 bg-primary w-full mt-1" />
          </div>
          <div className="w-full flex flex-col space-y-4 mt-4">
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ProductPage;
