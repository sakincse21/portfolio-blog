import { Request, Response } from "express";
import { PostService } from "./post.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    sendResponse(res, {
      success: true,
      message: "Post created successfully.",
      data: result,
      statusCode: httpStatus.CREATED,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const postId = Number(req.params.id);
    const result = await PostService.updatePost(postId, req.body);
    sendResponse(res, {
      success: true,
      message: "Post updated successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPostById = async (req: Request, res: Response) => {
  try {
    const postId = Number(req.params.id);
    const result = await PostService.getPostById(postId);
    sendResponse(res, {
      success: true,
      message: "Post fetched successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = (req.query.search as string) || "";
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === "true"
      : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(",") : [];

    const result = await PostService.getAllPosts({
      page,
      limit,
      search,
      isFeatured,
      tags,
    });

    sendResponse(res, {
      success: true,
      message: "Posts fetched successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = Number(req.params.id);

    const result = await PostService.deletePost(postId);
    sendResponse(res, {
      success: true,
      message: "Post deleted successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getBlogStat = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getBlogStat();
    sendResponse(res, {
      success: true,
      message: "Stats fetched successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const PostController = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
  getBlogStat
};
