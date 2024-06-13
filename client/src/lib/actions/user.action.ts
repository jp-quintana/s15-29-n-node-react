'use server';

import { connectToDB } from '../mongoose';
import User from '../models/user.model';
import { uploadFile } from '../cloudinary';

export const updateUser = async (formData: any) => {
  try {
    const name = formData.get('name');
    const lastName = formData.get('lastName');
    const id = formData.get('id');
    const file = formData.get('file');

    let response;

    if (file) {
      response = await uploadFile(file);
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
