'use client';

import { useEffect, useState } from 'react';

import SearchCard from './search-card';
import SearchPagination from './search-pagination';
// import { getpostsBySearch } from '@/services/product.service';
// import { useSession } from 'next-auth/react';

// let DUMMY_posts: {
//   url: string;
//   title: string;
//   owner: string;
//   date: {
//     start: string;
//     end: string;
//   };
//   auctionStatus: 'active' | 'upcoming' | 'ended';
//   postStatus: boolean;
// }[] = [
//   {
//     url: '/pruevasIMG/auto.jpg',
//     title: 'Unmissable Opportunity Toyota Hilux',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'active',
//     postStatus: false,
//   },

//   {
//     url: '/pruevasIMG/barco.jpg',
//     title: 'Opportunity for a Super Fast Boat',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'upcoming',
//     postStatus: true,
//   },

//   {
//     url: '/pruevasIMG/casa.jpg',
//     title: 'Two-Story House for Three Families',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'upcoming',
//     postStatus: true,
//   },

//   {
//     url: '/pruevasIMG/excavator.jpg',
//     title: 'Special on Road Equipment',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'ended',
//     postStatus: false,
//   },

//   {
//     url: '/pruevasIMG/tractor.jpg',
//     title: 'John Deere Opportunity',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'active',
//     postStatus: true,
//   },

//   {
//     url: '/pruevasIMG/auto.jpg',
//     title: 'Unmissable Opportunity Toyota Hilux',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'active',
//     postStatus: false,
//   },

//   {
//     url: '/pruevasIMG/barco.jpg',
//     title: 'Opportunity for a Super Fast Boat',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'upcoming',
//     postStatus: true,
//   },

//   {
//     url: '/pruevasIMG/casa.jpg',
//     title: 'Two-Story House for Three Families',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'upcoming',
//     postStatus: true,
//   },

//   {
//     url: '/pruevasIMG/excavator.jpg',
//     title: 'Special on Road Equipment',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'ended',
//     postStatus: false,
//   },

//   {
//     url: '/pruevasIMG/tractor.jpg',
//     title: 'John Deere Opportunity',
//     owner: 'BidBit',
//     date: {
//       start: '10/6/24, 12:00',
//       end: '24/6/24, 16:00',
//     },
//     auctionStatus: 'active',
//     postStatus: true,
//   },
// ];

interface SearchListProps {
  queryParamsString: string;
}

const SearchList = ({ queryParamsString }: SearchListProps) => {
  // TODO: remove "any" types

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    hasNextPage: false,
    hasPrevPage: false,
    limit: 12,
    nextPage: null,
    page: 1,
    pagingCounter: 1,
    prevPage: null,
    totalDocs: 1,
    totalPages: 1,
  });

  useEffect(() => {
    setIsLoading(true);
    const currentQueryParams = new URLSearchParams(queryParamsString);

    // const tParam = currentQueryParams.get('t') as 'sale' | 'auction';

    (async () => {
      const result = await fetch('api/posts?' + currentQueryParams);
      const data = await result.json();
      // console.log();
      // if (tParam === 'auction') {
      //   // TODO: fetch auctions
      //   return;
      // }

      // const result = await getProductsBySearch(queryParamsString, {
      //   Authorization: `Bearer ${session?.user?.accessToken}`,
      // });

      // if (!result.ok) {
      //   setIsLoading(false);
      //   return;
      // }

      console.log({ data: data.posts });

      const { docs, ...rest } = data.posts;

      setPosts(docs);
      setPagination(rest);
      setIsLoading(false);
    })();
  }, [queryParamsString]);

  // console.log({ posts });

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col rounded-sm overflow-hidden bg-secondary">
            {posts.length > 0 &&
              posts.map((post: any) => {
                return <SearchCard key={post.id} {...post} />;
              })}
          </div>

          <div>
            <SearchPagination
              queryParamsString={queryParamsString}
              {...pagination}
            />
          </div>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default SearchList;
