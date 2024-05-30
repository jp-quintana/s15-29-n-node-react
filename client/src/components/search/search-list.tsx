'use client';

import SearchCard from './search-card';
import SearchPagination from './search-pagination';

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
  // TODO: fetch products

  console.log({ queryParamsString });
  return (
    <div>
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
