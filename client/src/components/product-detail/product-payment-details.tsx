'use client';

import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '../ui/input';
import { useState } from 'react';

// TODO: update types & remove _id
interface ProductPaymentDetailsProps {
  id: string;
  owner: any;
  isAuction: boolean;
  price: number;
  lastBid: any;
  startDate: string;
  endDate: string;
}

const ProductPaymentDetails = ({
  id,
  owner,
  isAuction,
  price,
  lastBid,
  startDate,
  endDate,
}: ProductPaymentDetailsProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const initialBid = lastBid?.price || price;
  const [inputValue, setInputValue] = useState(initialBid);

  const handleConfirm = () => {
    if (isAuction) {
      router.push('/purchase/' + id + '?bid=' + inputValue);
    } else {
      router.push('/purchase/' + id);
    }
  };

  return (
    <div className="xl:w-[400px] w-full border rounded-sm flex flex-col overflow-hidden h-full">
      <div className="p-6 ">
        <>
          {!isAuction && (
            <>
              <p className="text-green-500 font-medium">Envio gratis</p>
              <p className="mt-3 font-bold">Stock disponible</p>
              <p className="text-sm">Comprar 1 unidad</p>
              <p className="mt-12 font-bold text-3xl">
                {price.toLocaleString('es-ar', {
                  style: 'currency',
                  currency: 'ARS',
                })}
              </p>
            </>
          )}
          {isAuction && (
            <>
              <p className="text-sm">
                Último pujador/a:{' '}
                {!lastBid
                  ? '¡Todavía no hubo una puja!'
                  : lastBid.user.name + ' ' + lastBid.user.lastName}
              </p>
              <p className="text-xs mt-2">
                Precio original:{' '}
                {price.toLocaleString('es-ar', {
                  style: 'currency',
                  currency: 'ARS',
                })}
              </p>
              <div className="mt-6 max-xl:max-w-[240px] uppercase w-full flex flex-col space-y-4">
                <div className="flex justify-between items-center gap-2">
                  <p className="bg-red-500 py-1 px-2 rounded-lg text-white">
                    Inicio
                  </p>
                  <p className="bg-green-500 py-1 px-2 rounded-lg text-white">
                    {format(startDate, 'dd/MM/yyyy')}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="bg-red-500 py-1 px-2 rounded-lg text-white">
                    Fin
                  </p>
                  <p className="bg-green-500 py-1 px-2 rounded-lg text-white">
                    {format(endDate, 'dd/MM/yyyy')}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-sm mb-2">Ultimo precio:</p>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </>
          )}
        </>
      </div>
      {session?.user?.id !== owner._id && (
        <button
          className="mt-auto flex justify-center bg-primary text-background py-3 font-bold cursor-pointer"
          onClick={handleConfirm}
        >
          {isAuction ? 'Participar' : 'Comprar'}
        </button>
      )}
    </div>
  );
};

export default ProductPaymentDetails;
