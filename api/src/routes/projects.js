const express = require("express");
const router = express.Router();

const {
  createProject,
  deleteProject,
  getOneProject,
  getProjects,
  updateProject,
} = require("../controllers/project.controller");

// /api/projects/
router.post("/", createProject);
router.get("/", getProjects);

// /api/projects/:projectId
router.get("/:id", getOneProject);
router.delete("/:id", deleteProject);
router.put("/:id", updateProject);

module.exports = router;
