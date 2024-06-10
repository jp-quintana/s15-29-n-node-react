import { ChevronRight } from 'lucide-react';

const PurchaseOptions = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 font-medium">Con fiat</p>
        <ul className="flex flex-col gap-3 w-full">
          <li className="bg-background border rounded-sm p-6 cursor-pointer flex justify-between items-center">
            Mercadopago
            <ChevronRight className="text-primary" />
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-3 font-medium">Con crypto</p>
        <ul className="flex flex-col gap-3 w-full">
          <li className="bg-background border rounded-sm p-6 cursor-pointer flex justify-between">
            Coinbase
            <ChevronRight className="text-primary" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PurchaseOptions;
