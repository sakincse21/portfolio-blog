import z from "zod/v3";

export const createPostZodSchema = z.object({
  title: z.string().min(5).trim(),
  content: z.string().min(30).trim(),
  thumbnail: z.string().min(5).startsWith("http").trim().optional(),
  isFeatured: z.boolean().optional(),
  tags: z.array(z.string()),
  authorId: z.number(),
});
export const updatePostZodSchema = z.object({
  title: z.string().min(5).trim().optional(),
  content: z.string().min(30).trim().optional(),
  thumbnail: z.string().min(5).startsWith("http").trim().optional(),
  isFeatured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  authorId: z.number().optional(),
});
