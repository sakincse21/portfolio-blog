import express from "express";
import { PostController } from "./post.controller";
import { authCheck } from "../../utils/authCheck";
import { Role } from "@prisma/client";
import { validateRequest } from "../../middlewares/validateRequest";
import { createPostZodSchema, updatePostZodSchema } from "./post.validation";

const router = express.Router();

router.get("/", PostController.getAllPosts);
router.get("/stat", authCheck(Role.ADMIN), PostController.getBlogStat);
router.get("/:id", PostController.getPostById);
router.post(
  "/",
  authCheck(Role.ADMIN),
  validateRequest(createPostZodSchema),
  PostController.createPost
);
router.patch(
  "/:id",
  authCheck(Role.ADMIN),
  validateRequest(updatePostZodSchema),
  PostController.updatePost
);
router.delete("/:id", authCheck(Role.ADMIN), PostController.deletePost);

export const postRouter = router;
