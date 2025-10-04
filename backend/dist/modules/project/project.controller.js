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
exports.ProjectController = void 0;
const project_service_1 = require("./project.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.ProjectService.createProject(req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Project created successfully.",
            data: result,
            statusCode: http_status_codes_1.default.CREATED,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const projectId = Number(req.params.id);
        const result = yield project_service_1.ProjectService.updateProject(projectId, req.body);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Project updated successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = Number(req.params.id);
        const result = yield project_service_1.ProjectService.getProjectById(projectId);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Project fetched successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = req.query.search || "";
        const isFeatured = req.query.isFeatured
            ? req.query.isFeatured === "true"
            : undefined;
        const tags = req.query.tags ? req.query.tags.split(",") : [];
        const result = yield project_service_1.ProjectService.getAllProjects({
            page,
            limit,
            search,
            isFeatured,
            tags,
        });
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Projects fetched successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = Number(req.params.id);
        const result = yield project_service_1.ProjectService.deleteProject(projectId);
        (0, sendResponse_1.sendResponse)(res, {
            success: true,
            message: "Project deleted successfully.",
            data: result,
            statusCode: http_status_codes_1.default.OK,
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.ProjectController = {
    createProject,
    updateProject,
    deleteProject,
    getProjectById,
    getAllProjects,
};
