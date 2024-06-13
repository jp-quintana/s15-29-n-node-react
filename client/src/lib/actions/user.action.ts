'use server';

import { connectToDB } from '../mongoose';
import User from '../models/user.model';
import { cloudinary } from '../cloudinary';
import path from 'path';
import { writeFile, unlink } from 'fs/promises';

export const updateUser = async (formData: any) => {
  try {
    const name = formData.get('name');
    const lastName = formData.get('lastName');
    const id = formData.get('id');
    const file = formData.get('file');

    let response;

    if (file) {
      console.log({ file });
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filePath = path.join(process.cwd(), 'public', file.name);
      await writeFile(filePath, buffer);
      response = await cloudinary.uploader.upload(filePath);
      await unlink(filePath);
    }

    await connectToDB();
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { name, lastName, image: response?.url },
      { new: true }
    );

    return {
      name: updatedUser.name,
      lastName: updatedUser.lastName,
      image: updatedUser.image,
    };
  } catch (error: any) {
    return { error: `Failed to create user: ${error.message}` };
  }
};
