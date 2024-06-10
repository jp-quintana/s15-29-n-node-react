import { Separator } from '../ui/separator';

const PurchaseDetails = () => {
  return (
    <div className="max-w-[360px] w-full">
      <div className="flex gap-4 items-center mb-5">
        <div className="rounded-full bg-primary h-[60px] w-[60px]" />
        <span>Nombre de producto</span>
      </div>
      <div className="bg-secondary border rounded-sm p-6 flex flex-col gap-4 w-full">
        <p className="font-medium">Detalle de tu compra</p>
        <Separator className="bg-muted-foreground/50" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p>Producto</p>
            <p>$ 10.000,00</p>
          </div>
          <div className="flex justify-between">
            <p>Envío</p>
            <p className="text-green-500">Gratis</p>
          </div>
        </div>
        <Separator className="bg-muted-foreground/50" />
        <div className="flex justify-between">
          <p>Total</p>
          <p className="font-bold">$ 10.000,00</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
