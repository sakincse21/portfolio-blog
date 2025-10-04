"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const authCheck_1 = require("../../utils/authCheck");
const client_1 = require("@prisma/client");
const validateRequest_1 = require("../../middlewares/validateRequest");
const project_validation_1 = require("./project.validation");
const router = express_1.default.Router();
router.get("/", project_controller_1.ProjectController.getAllProjects);
router.get("/:id", project_controller_1.ProjectController.getProjectById);
router.post("/", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), (0, validateRequest_1.validateRequest)(project_validation_1.createProjectZodSchema), project_controller_1.ProjectController.createProject);
router.patch("/:id", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), (0, validateRequest_1.validateRequest)(project_validation_1.updateProjectZodSchema), project_controller_1.ProjectController.updateProject);
router.delete("/:id", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), project_controller_1.ProjectController.deleteProject);
exports.projectRouter = router;
