// schemas/blogSchema.ts
import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(5, "Title must be at least 3 characters long"),
  content: z.string().min(30, "Content must be at least 20 characters"),
  thumbnail: z.string().startsWith('http'),
  tags: z.string().min(1),
  isFeatured: z.enum(["true", "false"]),
});

export type BlogFormValues = z.infer<typeof blogSchema>;
