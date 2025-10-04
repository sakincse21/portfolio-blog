import { Type } from "@prisma/client";
import z from "zod/v3";

export const createProjectZodSchema = z.object({
  title: z.string().min(5).trim(),
  description: z.string().min(30).trim(),
  thumbnail: z.string().startsWith("http").trim().optional(),
  technologies: z.array(z.string()),
  livelink: z.string().startsWith('http'),
  githublink: z.string().startsWith('http'),
  backendlink: z.string().startsWith('http').optional(),
  type: z.enum([Type.BackEnd, Type.FrontEnd, Type.FullStack]).optional(),
});
export const updateProjectZodSchema = z.object({
  title: z.string().min(5).trim().optional(),
  description: z.string().min(30).trim().optional(),
  thumbnail: z.string().startsWith("http").trim().optional(),
  technologies: z.array(z.string()).optional(),
  livelink: z.string().startsWith('http').optional(),
  githublink: z.string().startsWith('http').optional(),
  backendlink: z.string().startsWith('http').optional(),
  type: z.enum([Type.BackEnd, Type.FrontEnd, Type.FullStack]).optional(),
});
