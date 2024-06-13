import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import UserAvatar from '../user-avatar';
import { format } from 'date-fns';

// TODO: update types
interface SearchCardProps {
  id: string;
  image: string;
  name: string;
  user: any;
  price: number;
  isAuction: boolean;
  startDate: string;
  endDate: string;
  auctionStatus: 'active' | 'upcoming' | 'ended';
}

const SearchCard = ({
  id,
  image,
  name,
  user,
  price,
  isAuction,
  startDate,
  endDate,
}: // auctionStatus,
SearchCardProps) => {
  let auctionStatusTag = '';

  if (isAuction) {
    const today = new Date();

    const auctionStartDate = new Date(startDate);
    const auctionEndDate = new Date(endDate);

    if (auctionEndDate < today) {
      auctionStatusTag = 'finalizada';
    } else if (auctionStartDate > today) {
      auctionStatusTag = 'proximamente';
    } else {
      auctionStatusTag = 'activa';
    }
  }

  const auctionStatusTagStyles =
    auctionStatusTag === 'activa'
      ? 'bg-red-500 text-white'
      : auctionStatusTag === 'proximamente'
      ? 'bg-white text-red-500'
      : 'bg-foreground text-white';

  return (
    <Link
      href={`/product/${id}`}
      className="flex p-2 [&:not(:last-child)]:border-b border-b-border dark:border-b-popover space-x-4"
    >
      <div className="flex justify-center items-center relative">
        <Image
          src={image}
          alt="Product image"
          width={200}
          height={200}
          className="object-contain rounded-sm"
        />
        {isAuction && (
          <div
            className={cn(
              'absolute top-2 left-2 rounded-full px-2 text-xs py-1 uppercase',
              auctionStatusTagStyles
            )}
          >
            {auctionStatusTag}
          </div>
        )}
      </div>
      <div className="flex-1 overflow-hidden flex flex-col py-3">
        <div>
          <div className="flex items-center space-x-2">
            <div className="min-w-fit">
              <UserAvatar user={user} className="h-7 w-7" />
            </div>
            <span className="truncate font-medium">
              {user.name} {user.lastName}
            </span>
          </div>
          <p className="truncate font-medium text-md mt-1">{name}</p>
          <p className="truncate font-medium text-lg mt-1">
            {price.toLocaleString('es-ar', {
              style: 'currency',
              currency: 'ARS',
            })}
          </p>
        </div>
        {isAuction && (
          <div className="mt-auto max-w-[240px] w-full uppercase flex flex-col space-y-4">
            <div className="flex justify-between items-center gap-2">
              <p className="bg-red-500 py-1 px-2 rounded-lg text-white">
                Inicio
              </p>
              <p className="bg-green-500 py-1 px-2 rounded-lg text-white">
                {format(startDate, 'dd/MM/yyyy')}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="bg-red-500 py-1 px-2 rounded-lg text-white">Fin</p>
              <p className="bg-green-500 py-1 px-2 rounded-lg text-white">
                {format(endDate, 'dd/MM/yyyy')}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default SearchCard;
