"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_service_1 = require("./post.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_service_1.PostService.createPost(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Post created successfully.",
            data: result,
            statusCode: http_status_codes_1.default.CREATED,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const postId = Number(req.params.id);
        const result = yield post_service_1.PostService.updatePost(postId, req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Post updated successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = Number(req.params.id);
        const result = yield post_service_1.PostService.getPostById(postId);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Post fetched successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search || "";
        const isFeatured = req.query.isFeatured
            ? req.query.isFeatured === "true"
            : undefined;
        const tags = req.query.tags ? req.query.tags.split(",") : [];
        const result = yield post_service_1.PostService.getAllPosts({
            page,
            limit,
            search,
            isFeatured,
            tags,
        });
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Posts fetched successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = Number(req.params.id);
        const result = yield post_service_1.PostService.deletePost(postId);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Post deleted successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const getBlogStat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_service_1.PostService.getBlogStat();
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Stats fetched successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.PostController = {
    createPost,
    updatePost,
    deletePost,
    getPostById,
    getAllPosts,
    getBlogStat
};
