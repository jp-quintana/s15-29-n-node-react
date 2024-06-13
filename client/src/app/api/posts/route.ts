import Post from '@/lib/models/post.model';
import { connectToDB } from '@/lib/mongoose';

import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const url = new URL(req.url as string);

  const searchParams = new URLSearchParams(url.searchParams);

  const limit = searchParams.get('limit');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');
  const q = searchParams.get('q');

  console.log({ searchParams });

  const paginationOptions = {
    limit: !limit ? 10 : limit,
    sort: sort ? { price: sort } : undefined,
    page: page ? page : 1,
  };

  await connectToDB();

  const posts = await Post.paginate(
    { title: { $regex: q ? q : '', $options: 'i' } },
    { ...paginationOptions, lean: true }
  );

  posts.prevLink = posts.prevPage
    ? `?limit=${paginationOptions.limit}&page=${posts.prevPage}${
        paginationOptions.sort ? `&sort=${paginationOptions.sort}` : ''
      }${q ? `&q=${q}` : ''}`
    : null;

  posts.nextLink = posts.nextPage
    ? `?limit=${paginationOptions.limit}&page=${posts.nextPage}${
        paginationOptions.sort ? `&sort=${paginationOptions.sort}` : ''
      }${q ? `&q=${q}` : ''}`
    : null;

  return NextResponse.json({
    posts,
  });
}
