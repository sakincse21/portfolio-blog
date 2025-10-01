import { Request, Response } from "express";
import { ProjectService } from "./project.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const createProject = async (req: Request, res: Response) => {
  try {
    const result = await ProjectService.createProject(req.body);
    sendResponse(res, {
      success: true,
      message: "Project created successfully.",
      data: result,
      statusCode: httpStatus.CREATED,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProject = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const projectId = Number(req.params.id);
    const result = await ProjectService.updateProject(projectId, req.body);
    sendResponse(res, {
      success: true,
      message: "Project updated successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProjectById = async (req: Request, res: Response) => {
  try {
    const projectId = Number(req.params.id);
    const result = await ProjectService.getProjectById(projectId);
    sendResponse(res, {
      success: true,
      message: "Project fetched successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = (req.query.search as string) || "";
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === "true"
      : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(",") : [];

    const result = await ProjectService.getAllProjects({
      page,
      limit,
      search,
      isFeatured,
      tags,
    });

    sendResponse(res, {
      success: true,
      message: "Projects fetched successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const projectId = Number(req.params.id);

    const result = await ProjectService.deleteProject(projectId);
    sendResponse(res, {
      success: true,
      message: "Project deleted successfully.",
      data: result,
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};


export const ProjectController = {
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getAllProjects,
};
