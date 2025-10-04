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
exports.ProjectService = void 0;
const db_1 = require("../../configs/db");
const errorHelpers_1 = __importDefault(require("../../errorHelpers"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.project.create({
        data: payload
    });
    return result;
});
const updateProject = (projectId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const ifProjectExists = yield db_1.prisma.project.findUnique({
        where: {
            id: projectId
        }
    });
    if (!ifProjectExists) {
        throw new errorHelpers_1.default(http_status_codes_1.default.NOT_FOUND, "Project does not exist.");
    }
    const result = yield db_1.prisma.project.update({
        where: {
            id: ifProjectExists === null || ifProjectExists === void 0 ? void 0 : ifProjectExists.id
        },
        data: payload
    });
    return result;
});
const deleteProject = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.project.delete({
        where: {
            id: projectId
        }
    });
    return result;
});
const getProjectById = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield db_1.prisma.project.findUnique({
            where: {
                id: projectId
            }
        });
        if (!(result === null || result === void 0 ? void 0 : result.id)) {
            throw new errorHelpers_1.default(http_status_codes_1.default.NOT_FOUND, "Project does not exist.");
        }
        return result;
    }));
});
const getAllProjects = (_a) => __awaiter(void 0, [_a], void 0, function* ({ page = 1, limit = 10, search, isFeatured, tags }) {
    const skip = (page - 1) * limit;
    const where = {
        AND: [
            search && {
                OR: [
                    { title: { contains: search, mode: 'insensitive' } },
                    { content: { contains: search, mode: 'insensitive' } }
                ]
            },
            typeof isFeatured === "boolean" && { isFeatured },
            (tags && tags.length > 0) && { tags: { hasEvery: tags } }
        ].filter(Boolean)
    };
    const result = yield db_1.prisma.project.findMany({
        skip,
        take: limit,
        where,
        orderBy: {
            updatedAt: "desc"
        }
    });
    const total = yield db_1.prisma.project.count({ where });
    return {
        data: result,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
});
exports.ProjectService = {
    createProject, updateProject, deleteProject, getProjectById, getAllProjects
};
