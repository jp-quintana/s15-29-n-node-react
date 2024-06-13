import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import { writeFile, unlink } from 'fs/promises';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), 'public', file.name);
  await writeFile(filePath, buffer);
  const response = await cloudinary.uploader.upload(filePath);
  await unlink(filePath);

  return response;
};
