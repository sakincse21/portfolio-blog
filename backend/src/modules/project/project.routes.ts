import express from "express";
import { ProjectController } from "./project.controller";
import { authCheck } from "../../utils/authCheck";
import { Role } from "@prisma/client";
import { validateRequest } from "../../middlewares/validateRequest";
import { createProjectZodSchema, updateProjectZodSchema } from "./project.validation";

const router = express.Router();

router.get("/", ProjectController.getAllProjects);
router.get("/stat", authCheck(Role.ADMIN), ProjectController.getProjectStat);
router.get("/:id", ProjectController.getProjectById);
router.post(
  "/",
  authCheck(Role.ADMIN),
  validateRequest(createProjectZodSchema),
  ProjectController.createProject
);
router.patch(
  "/:id",
  authCheck(Role.ADMIN),
  validateRequest(updateProjectZodSchema),
  ProjectController.updateProject
);
router.delete("/:id", authCheck(Role.ADMIN), ProjectController.deleteProject);

export const projectRouter = router;
