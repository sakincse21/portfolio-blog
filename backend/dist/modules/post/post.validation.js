"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostZodSchema = exports.createPostZodSchema = void 0;
const v3_1 = __importDefault(require("zod/v3"));
exports.createPostZodSchema = v3_1.default.object({
    title: v3_1.default.string().min(5).trim(),
    content: v3_1.default.string().min(30).trim(),
    thumbnail: v3_1.default.string().startsWith("http").trim().optional(),
    isFeatured: v3_1.default.boolean().optional(),
    tags: v3_1.default.array(v3_1.default.string()),
    authorId: v3_1.default.number(),
});
exports.updatePostZodSchema = v3_1.default.object({
    title: v3_1.default.string().min(5).trim().optional(),
    content: v3_1.default.string().min(30).trim().optional(),
    thumbnail: v3_1.default.string().startsWith("http").trim().optional(),
    isFeatured: v3_1.default.boolean().optional(),
    tags: v3_1.default.array(v3_1.default.string()).optional(),
    authorId: v3_1.default.number().optional(),
});
