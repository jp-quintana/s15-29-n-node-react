'use server';

import { connectToDB } from '../mongoose';
import Post from '../models/post.model';
import { uploadFile } from '../cloudinary';

export const createPost = async (formData: any) => {
  try {
    const id = formData.get('id');
    const name = formData.get('name');
    const description = formData.get('description');
    const file = formData.get('file');
    const price = formData.get('price');
    const category = formData.get('category');
    const isAuction = formData.get('is_auction');
    const startDate = formData.get('start_date');
    const endDate = formData.get('end_date');

    let response = await uploadFile(file);

    await connectToDB();
    const post = new Post({
      name,
      description,
      image: response?.url,
      price: +price,
      category,
      isAuction: isAuction === 'true' ? true : false,
      user: id,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });

    await post.save();

    return { ok: true };
  } catch (error: any) {
    return { error: `Failed to create user: ${error.message}` };
  }
};
