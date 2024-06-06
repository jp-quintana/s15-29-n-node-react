import { z } from 'zod';

export const productUploadSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(10).max(500),
  file: typeof window === 'undefined' ? z.any() : z.instanceof(FileList),
  // .refine((files) => files?.length == 1, 'Image is required.'),
  // .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  // .refine(
  //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   ".jpg, .jpeg, .png and .webp files are accepted."
  // ),
  category: z.string(),
});
