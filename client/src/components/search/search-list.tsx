'use client';

import { useEffect, useState } from 'react';

import SearchCard from './search-card';
import SearchPagination from './search-pagination';
import { getProductsBySearch } from '@/services/product.service';
import { useSession } from 'next-auth/react';

let DUMMY_PRODUCTS: {
  url: string;
  title: string;
  owner: string;
  date: {
    start: string;
    end: string;
  };
  auctionStatus: 'active' | 'upcoming' | 'ended';
  postStatus: boolean;
}[] = [
  {
    url: '/pruevasIMG/auto.jpg',
    title: 'Unmissable Opportunity Toyota Hilux',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'active',
    postStatus: false,
  },

  {
    url: '/pruevasIMG/barco.jpg',
    title: 'Opportunity for a Super Fast Boat',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'upcoming',
    postStatus: true,
  },

  {
    url: '/pruevasIMG/casa.jpg',
    title: 'Two-Story House for Three Families',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'upcoming',
    postStatus: true,
  },

  {
    url: '/pruevasIMG/excavator.jpg',
    title: 'Special on Road Equipment',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'ended',
    postStatus: false,
  },

  {
    url: '/pruevasIMG/tractor.jpg',
    title: 'John Deere Opportunity',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'active',
    postStatus: true,
  },

  {
    url: '/pruevasIMG/auto.jpg',
    title: 'Unmissable Opportunity Toyota Hilux',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'active',
    postStatus: false,
  },

  {
    url: '/pruevasIMG/barco.jpg',
    title: 'Opportunity for a Super Fast Boat',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'upcoming',
    postStatus: true,
  },

  {
    url: '/pruevasIMG/casa.jpg',
    title: 'Two-Story House for Three Families',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'upcoming',
    postStatus: true,
  },

  {
    url: '/pruevasIMG/excavator.jpg',
    title: 'Special on Road Equipment',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'ended',
    postStatus: false,
  },

  {
    url: '/pruevasIMG/tractor.jpg',
    title: 'John Deere Opportunity',
    owner: 'BidBit',
    date: {
      start: '10/6/24, 12:00',
      end: '24/6/24, 16:00',
    },
    auctionStatus: 'active',
    postStatus: true,
  },
];

interface SearchListProps {
  queryParamsString: string;
}

const SearchList = ({ queryParamsString }: SearchListProps) => {
  // TODO: remove session logic when endpoint is corrected
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (session?.user?.accessToken) {
      const currentQueryParams = new URLSearchParams(queryParamsString);

      const tParam = currentQueryParams.get('t') as 'sale' | 'auction';

      (async () => {
        if (tParam === 'auction') {
          // TODO: fetch auctions
          return;
        }

        const result = await getProductsBySearch(queryParamsString, {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        });

        if (!result.ok) {
          setIsLoading(false);
          return;
        }

        setPosts(result.data.products);
        setIsLoading(false);
      })();
    }
  }, [queryParamsString, session?.user?.accessToken]);

  console.log({ posts });

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col rounded-sm overflow-hidden bg-secondary">
        {DUMMY_PRODUCTS.map((product, index) => {
          return <SearchCard key={index} {...product} />;
        })}
      </div>

      <div>
        <SearchPagination />
      </div>
    </div>
  );
};

export default SearchList;
