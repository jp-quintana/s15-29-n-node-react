'use client';

import { useEffect, useState } from 'react';
import SearchCard from '../search/search-card';
import { useSession } from 'next-auth/react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

// TODO: update
const UserPostList = () => {
  const { data: session } = useSession();

  const pathname = usePathname();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isSalesPage = pathname.split('/').includes('sales');

  useEffect(() => {
    setIsLoading(true);

    if (session?.user?.id) {
      (async () => {
        const result = await fetch(
          `/api/user/posts?t=${isSalesPage ? 'sale' : 'auction'}&userId=${
            session?.user?.id
          }`
        );
        const data = await result.json();

        const { docs } = data.posts;

        setPosts(docs);

        setIsLoading(false);
      })();
    }
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          {posts.length > 0 && (
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col rounded-sm overflow-hidden bg-secondary">
                {posts.map((post: any) => {
                  return <SearchCard key={post.id} {...post} />;
                })}
              </div>
            </div>
          )}
          {posts.length === 0 && (
            <div className="flex justify-center">
              <div className="text-center">
                <p className="mb-3">
                  No hay productos en {isSalesPage ? 'venta' : 'subasta'}.
                </p>
                <Link
                  href="/publish"
                  className={buttonVariants({ variant: 'default' })}
                >
                  Crear
                </Link>
              </div>
            </div>
          )}
        </>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default UserPostList;
