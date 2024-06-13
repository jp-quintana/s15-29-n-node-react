import Post from '@/lib/models/post.model';
import { connectToDB } from '@/lib/mongoose';

import { NextResponse } from 'next/server';
import type { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  const url = new URL(req.url as string);

  await connectToDB();

  console.log({ url });

  // const posts = await Post.paginate(query, {
  //   ...paginationOptions,
  //   lean: true,
  // });

  return NextResponse.json({
    posts: true,
  });
}
