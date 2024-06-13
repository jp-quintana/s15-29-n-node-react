import Image from 'next/image';
import { Separator } from '../ui/separator';

// TODO: update
interface PurchaseDetailsProps {
  name: string;
  image: string;
  isAuction: boolean;
  bid: string | undefined;
  price: number;
}

const PurchaseDetails = ({
  name,
  image,
  isAuction,
  price,
  bid,
}: PurchaseDetailsProps) => {
  return (
    <div className="md:max-w-[360px] w-full">
      <div className="flex gap-4 items-center mb-5">
        <Image
          src={image}
          alt="image"
          height={60}
          width={60}
          className="rounded-full bg-primary h-[60px] w-[60px] border"
        />
        <span className="line-clamp-1">{name}</span>
      </div>
      <div className="bg-secondary border rounded-sm p-6 flex flex-col gap-4 w-full">
        <p className="font-medium">
          Detalle de tu {!isAuction ? 'compra' : 'puja'}
        </p>
        <Separator className="bg-muted-foreground/50" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p>{!isAuction ? 'Producto' : 'Puja'}</p>
            <p>
              {!isAuction
                ? price.toLocaleString('es-ar', {
                    style: 'currency',
                    currency: 'ARS',
                  })
                : parseInt(bid as string).toLocaleString('es-ar', {
                    style: 'currency',
                    currency: 'ARS',
                  })}
            </p>
          </div>
          {!isAuction && (
            <div className="flex justify-between">
              <p>Envío</p>
              <p className="text-green-500">Gratis</p>
            </div>
          )}
        </div>
        <Separator className="bg-muted-foreground/50" />
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold">
            {!isAuction
              ? price.toLocaleString('es-ar', {
                  style: 'currency',
                  currency: 'ARS',
                })
              : parseInt(bid as string).toLocaleString('es-ar', {
                  style: 'currency',
                  currency: 'ARS',
                })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
