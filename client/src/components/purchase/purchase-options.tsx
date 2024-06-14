'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Spinner from '../spinner';
import { useRouter } from 'next/navigation';
import { updatePost } from '@/lib/actions/post.action';
import { useToast } from '@/components/ui/use-toast';

interface PurchaseOptionsProps {
  id: string;
  isAuction: boolean;
  bid: string | undefined;
}

const PurchaseOptions = ({ id, isAuction, bid }: PurchaseOptionsProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    if (isAuction && session?.user?.id) {
      const result = await updatePost({ userId: session?.user?.id, bid, id });
      if (result?.error) {
        toast({
          title: 'Hubo un error',
          description: result.error,
        });
        setIsLoading(false);
        return;
      }

      toast({
        title: 'La operación se ha realizado con éxito',
        description: `Se ha creado la puja`,
      });
      router.push('/product/' + id);
    } else {
      toast({
        title: 'La operación se ha realizado con éxito',
        description: `Se ha creado la orden`,
      });
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-3 font-medium">Con fiat</p>
        <ul className="flex flex-col gap-3 w-full">
          <li
            className="bg-background border rounded-sm p-6 cursor-pointer flex justify-between items-center"
            onClick={handleConfirm}
          >
            Confirmar
            {!isLoading && <ChevronRight className="text-primary" />}
            {isLoading && <Spinner className="text-primary static" />}
          </li>
        </ul>
      </div>
      {/* <div>
        <p className="mb-3 font-medium">Con crypto</p>
        <ul className="flex flex-col gap-3 w-full">
          <li className="bg-background border rounded-sm p-6 cursor-pointer flex justify-between">
            Coinbase
            <ChevronRight className="text-primary" />
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default PurchaseOptions;
