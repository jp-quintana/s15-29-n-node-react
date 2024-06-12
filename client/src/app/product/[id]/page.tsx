import MaxWidthContainer from '@/components/max-width-container';
import ProductCarousel from '@/components/product-detail/product-carousel';
import ProductPaymentDetails from '@/components/product-detail/product-payment-details';
import { Button } from '@/components/ui/button';

import { Share, Info } from 'lucide-react';

const ProductPage = () => {
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              hic inventore magnam eum quam maxime alias vel consectetur! Earum
              provident, praesentium, tempora ipsam tenetur amet nobis nisi
              atque nam iusto, eum nemo architecto quidem! Nemo magnam vel quia
              placeat exercitationem debitis, repellat, eos voluptatibus culpa
              blanditiis, in dolor ad nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              necessitatibus laudantium molestias facilis. Incidunt labore
              repudiandae qui modi quod at eius iusto et obcaecati, sunt nemo
              enim aspernatur pariatur sit iure inventore voluptatum ipsa. Quasi
              architecto delectus eum eaque error? Fugiat odio numquam repellat.
              Velit harum quae at ratione eaque?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus ratione atque quas suscipit aspernatur ea odio. Esse
              eaque expedita tenetur sed porro in iure voluptatum, fugit magnam
              officiis, dignissimos possimus. Odio quisquam natus dolores
              maiores minima voluptatum unde consequuntur fugiat libero,
              assumenda, delectus, dolorum quaerat incidunt! Vel harum sequi ad.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ProductPage;
