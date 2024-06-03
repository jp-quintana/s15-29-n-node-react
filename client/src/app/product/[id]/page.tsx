import CarouselProductImages from "@/components/CarouselProductImages";
import { Button } from "@/components/ui/button";
import "./page.css";
import Calendar from "@/components/icons/Calendar";
interface ProductPageProps {
  params: { id: string };
  searchParams: { [key: string]: string };
  product: ProductsDetails;
}

interface ProductsDetails {
  title: string;
  subTitle: string;
  startDate: Date;
  endDate: Date;
  store: string;
  seller: string;
  details: string;
  location: string;
  information: string;
  startingPrice: number;
  nomenclature: string;
  surface: string;
  currentBid: number;
}

const ProductPage = async ({
  params,
  // product,
  ...otherProps
}: ProductPageProps) => {
  const product: ProductsDetails = {
    title: "Subasta de Bitcoin",
    subTitle: "¡Únete a la emocionante subasta de Bitcoin!",
    startDate: new Date("2024-06-01"),
    endDate: new Date(),
    // platform: "CryptoAuctionX",
    seller: "CryptoInvestments Inc.",
    location: "Buenos Aires, Argentina",
    startingPrice: 50000,
    currentBid: 52000,
    details: "Bitcoin en venta, recién minado, transacción segura.",
    information:
      "Más detalles sobre la transacción y el envío se proporcionarán al ganador de la subasta.",
    store: "CryptoStore",
    nomenclature:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum est expedita similique, nisi impedit eius. Itaque dolores quia",
    surface:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum est expedita similique, nisi impedit eius. Itaque dolores quia",
  };

  const formatDate = (
    date: Date,
    config?: Intl.DateTimeFormatOptions
  ): string => {
    const formato = new Intl.DateTimeFormat("es-AR", {
      ...config,
      hour: "2-digit",
      day: "numeric",
      year: "2-digit",
      month: "2-digit",
    }).format;
    return formato(date);
  };

  // const product = data;
  return (
    <div className='container flex flex-col gap-3 py-10'>
      <div>{params.id} </div>
      <h2 className='product-title'>
        {product.title}
        <span className='product-title-summary'>{product.subTitle}</span>
      </h2>
      <div className='product-end-date-information'>
        <Calendar />
        <span className='pt-1'>
          Cierra a partir de: {formatDate(product.endDate)}
        </span>
      </div>
      <section className='product-information-container-main'>
        <div className=''>
          <h3 className='product-information-title'>{product.details} </h3>
          <span className='product-information-title-location'>
            Localización: {product.location}
          </span>
        </div>
        <div className='product-information-main'>
          <CarouselProductImages className='product-carousel-container' />
          <div className='product-information-seller'>
            <div className='product-seller-details'>
              <div>
                <span>CIERRE:</span>
                <div>status</div>
              </div>
              <div>
                <div>
                  <span>FECHA DE CIERRE:</span>
                  <div>status</div>
                </div>
                <div>
                  <span>FECHA DE APERTURA:</span>
                  <div>status</div>
                </div>
              </div>
              <hr />
              <div className='w-full flex justify-around py-0.5'>
                <span>VISTAS: 0</span>
                <span>PARTICIPANTES: 0</span>
                <span>OFERTAS: 0</span>
              </div>
              <hr />
              <div className='flex flex-col gap-1'>
                <span>
                  OFERTA: <strong className='text-3xl'> 6,000.00 US$</strong>
                </span>
                <span>ENTRADA: -- </span>
                <span>GANADOR ACTUAL: -- </span>
              </div>
              <hr />
              <div>
                <span>
                  Oferta Sugerida: <strong> 6,000.00</strong>
                </span>
              </div>
              <span className='font-semibold text-primary pt-5'>
                Estimar comisiones y otros importes
              </span>
              <Button variant='default' className='w-full uppercase'>
                Participar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <span className='product-open-information-title'>
          Información de Apertura
        </span>
        <ul>
          <li>
            <strong>Tienda:</strong> {product.store}
          </li>
          <li>
            <strong>Vendedor:</strong> {product.seller}
          </li>
          <li>
            <strong>Oferta Inicial:</strong> {product.startingPrice}
          </li>
        </ul>
      </section>
      <hr className='product-line-spacing' />
      <section>
        <span className='product-description-title'>Descripción Detallada</span>
        <ul className='product-description-details'>
          <li>
            <span className='product-description-details-title'>
              Información basica
            </span>
            <p>{product.information}</p>
          </li>
          <li>
            <span className='product-description-details-title'>
              Nomenclatura Catastral
            </span>
            <p>{product.nomenclature}</p>
          </li>
          <li>
            <span className='product-description-details-title'>
              Superficie
            </span>
            <p>{product.surface}</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProductPage;
