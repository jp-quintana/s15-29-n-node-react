import Image from 'next/image';

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
  return (
    <div className="flex p-2 [&:not(:last-child)]:border-b">
      <div className="flex justify-center items-center">
        <Image
          src={url}
          alt="Product image"
          width={200}
          height={200}
          className="object-contain rounded-sm"
        />
      </div>
      <div className="flex-1">Hola</div>
    </div>
  );
};

export default SearchCard;
