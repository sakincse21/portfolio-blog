// schemas/blogSchema.ts
import { z } from "zod";

export const projectZodSchema = z.object({
  title: z.string().min(5, "Title must be at least 3 characters long"),
  description: z.string().min(30, "Content must be at least 20 characters"),
  thumbnail: z.string().startsWith('http').optional(),
  livelink: z.string().startsWith('http'),
  githublink: z.string().startsWith('http'),
  backendlink: z.string().startsWith('http').optional(),
  technologies: z.string().min(1),
  isFeatured: z.enum(["true", "false"]),
  type: z.enum(['FullStack','FrontEnd','BackEnd'])
});

export type ProjectFormValues = z.infer<typeof projectZodSchema>;
