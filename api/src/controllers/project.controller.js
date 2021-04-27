import Project from "../models/Project";

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    return res.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getOneProject(req, res) {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    res.json({
      data: project,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Project.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Project deleted successfully.",
      data: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createProject(req, res) {
  const { name, description, date } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        description,
        date,
      },
      {
        fields: ["name", "description", "date"],
      }
    );
    if (newProject) {
      return res.json({
        message: "Project created successfully.",
        data: newProject,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong.",
      data: {},
    });
  }
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const { name, description, date } = req.body;
  try {
    const projects = await Project.findAll({
      attributes: ["id", "name", "description", "date"],
      where: {
        id,
      },
    });

    if (projects.length > 0) {
      projects.forEach(async (project) => {
        await project.update({
          name,
          description,
          date,
        });
      });
    }

    return res.json({
      message: "Project updated successfully.",
      data: projects,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
      data: {},
    });
  }
}
