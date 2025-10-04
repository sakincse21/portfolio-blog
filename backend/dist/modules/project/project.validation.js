"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectZodSchema = exports.createProjectZodSchema = void 0;
const client_1 = require("@prisma/client");
const v3_1 = __importDefault(require("zod/v3"));
exports.createProjectZodSchema = v3_1.default.object({
    title: v3_1.default.string().min(5).trim(),
    description: v3_1.default.string().min(30).trim(),
    thumbnail: v3_1.default.string().startsWith("http").trim().optional(),
    technologies: v3_1.default.array(v3_1.default.string()),
    livelink: v3_1.default.string().startsWith('http'),
    githublink: v3_1.default.string().startsWith('http'),
    backendlink: v3_1.default.string().startsWith('http').optional(),
    type: v3_1.default.enum([client_1.Type.BackEnd, client_1.Type.FrontEnd, client_1.Type.FullStack]).optional(),
});
exports.updateProjectZodSchema = v3_1.default.object({
    title: v3_1.default.string().min(5).trim().optional(),
    description: v3_1.default.string().min(30).trim().optional(),
    thumbnail: v3_1.default.string().startsWith("http").trim().optional(),
    technologies: v3_1.default.array(v3_1.default.string()).optional(),
    livelink: v3_1.default.string().startsWith('http').optional(),
    githublink: v3_1.default.string().startsWith('http').optional(),
    backendlink: v3_1.default.string().startsWith('http').optional(),
    type: v3_1.default.enum([client_1.Type.BackEnd, client_1.Type.FrontEnd, client_1.Type.FullStack]).optional(),
});
