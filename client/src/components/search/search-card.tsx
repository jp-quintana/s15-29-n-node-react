import Image from 'next/image';
import Link from 'next/link';

import { CircleUserRound } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchCardProps {
  url: string;
  title: string;
  owner: string;
  date: {
    start: string;
    end: string;
  };
  auctionStatus: 'active' | 'upcoming' | 'ended';
  postStatus: boolean;
}

const SearchCard = ({
  url,
  title,
  owner,
  date,
  auctionStatus,
  postStatus,
}: SearchCardProps) => {
  const auctionStatusTag =
    auctionStatus === 'active'
      ? 'activa'
      : auctionStatus === 'upcoming'
      ? 'proximamente'
      : 'finalizada';

  const auctionStatusTagStyles =
    auctionStatus === 'active'
      ? 'bg-red-500 text-white'
      : auctionStatus === 'upcoming'
      ? 'bg-white text-red-500'
      : 'bg-foreground text-white';

  // TODO: update
  console.log(postStatus);

  return (
    <Link
      href={`/product/${title}`}
      className="flex p-2 [&:not(:last-child)]:border-b border-b-border dark:border-b-popover space-x-4"
    >
      <div className="flex justify-center items-center relative">
        <Image
          src={url}
          alt="Product image"
          width={200}
          height={200}
          className="object-contain rounded-sm"
        />
        <div
          className={cn(
            'absolute top-2 left-2 rounded-full px-2 text-xs py-1 uppercase',
            auctionStatusTagStyles
          )}
        >
          {auctionStatusTag}
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col py-6">
        <div>
          <div className="flex items-center space-x-2">
            <div className="min-w-fit">
              <CircleUserRound />
            </div>
            <span className="truncate font-medium">{owner}</span>
          </div>
          <p className="truncate font-bold text-lg">{title}</p>
        </div>
        <div className="mt-auto max-w-[240px] w-full uppercase flex flex-col space-y-4">
          <div className="flex justify-between items-center gap-2">
            <p className="bg-red-500 py-1 px-2 rounded-lg text-white">Inicio</p>
            <p className="bg-green-500 py-1 px-2 rounded-lg text-white">
              {date.start}
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className="bg-red-500 py-1 px-2 rounded-lg text-white">Fin</p>
            <p className="bg-green-500 py-1 px-2 rounded-lg text-white">
              {date.end}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
