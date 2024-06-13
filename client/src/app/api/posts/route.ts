import Post from '@/lib/models/post.model';
import { connectToDB } from '@/lib/mongoose';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url as string);

  const searchParams = new URLSearchParams(url.searchParams);

  const limit = searchParams.get('limit');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');
  const s = searchParams.get('s');
  const t = searchParams.get('t') as 'sale' | 'auction';

  console.log({ searchParams });

  const paginationOptions = {
    limit: !limit ? 12 : +limit,
    sort: sort ? { price: sort } : undefined,
    page: page ? +page : 1,
    populate: 'user',
  };

  await connectToDB();

  const query: any = { name: { $regex: s ? s : '', $options: 'i' } };
  query.isAuction = t === 'auction';

  const posts = await Post.paginate(query, {
    ...paginationOptions,
    lean: true,
  });

  return NextResponse.json({
    posts,
  });
}
