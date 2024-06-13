import Post from '@/lib/models/post.model';
import { connectToDB } from '@/lib/mongoose';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface Request extends NextRequest {
  params: { id: string };
}

export async function GET(req: Request) {
  await connectToDB();

  const post = await Post.findById(req.params.id as string)
    .populate('user')
    .populate({
      path: 'lastBid.user',
      model: 'User',
    })
    .lean();

  return NextResponse.json({
    post,
  });
}
