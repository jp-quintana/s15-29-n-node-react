'use server';

import z from 'zod';
import bcrypt from 'bcryptjs';
import { connectToDB } from '../mongoose';
import User from '../models/user.model';
import { loginSchema, registerSchema } from '../schemas';

export const register = async (values: z.infer<typeof registerSchema>) => {
  try {
    const validateFields = registerSchema.safeParse(values);

    if (!validateFields.success) {
      return { error: 'Invalid fields' };
    }

    const { name, lastName, email, password } = values;

    await connectToDB();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { error: 'User already exists' };
    }

    const salt = await bcrypt.genSalt(10);

    const encryptedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      lastName,
      email,
      password: encryptedPassword,
    });
  } catch (error: any) {
    return { error: `Failed to create user: ${error.message}` };
  }
};

export const login = async (values: z.infer<typeof loginSchema>) => {
  await connectToDB();
  const user = await User.findOne({ email: values.email });

  if (!user || !user.password) return null;

  const passwordsMatch = await bcrypt.compare(values.password, user.password);

  if (passwordsMatch) return user;
};
