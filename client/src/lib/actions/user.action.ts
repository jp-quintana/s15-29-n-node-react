'use server';

import { connectToDB } from '../mongoose';
import User from '../models/user.model';

export const updateUser = async (formData: any) => {
  try {
    const name = formData.get('name');
    const lastName = formData.get('lastName');
    const id = formData.get('id');
    const file = formData.get('file');

    if (file) {
      const bytes = file.arrayBuffer();
      const buffer = Buffer.from(bytes);
    }

    // await connectToDB();
    // const updatedUser = await User.findOneAndUpdate(
    //   { _id: userId },
    //   { ...values }
    // );

    return null;

    // return { user: updatedUser };
  } catch (error: any) {
    return { error: `Failed to create user: ${error.message}` };
  }
};
