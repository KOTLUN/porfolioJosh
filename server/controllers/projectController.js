import Project from "../models/Project.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// GET /api/projects
export const listProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// GET /api/projects/:id  (matches by slug or Mongo _id)
export const getProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await Project.findOne({ $or: [{ slug: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }] });
  if (!project) {
    res.status(404);
    throw new Error("Project not found.");
  }
  res.json(project);
});
