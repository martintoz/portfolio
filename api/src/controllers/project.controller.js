const Project = require("../models/Project");
module.exports = {
  getProjects: async function (req, res) {
  try {
    const projects = await Project.findAll({
      order: [["date", "DESC"]],
    });
    return res.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
},

getOneProject: async function (req, res) {
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
},

deleteProject: async function (req, res) {
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
},

createProject: async function (req, res) {
  const { name, name_es, description, description_es, date, github, deploy, photo } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        name_es,
        description,
        description_es,
        date,
        github,
        deploy,
        photo,
      },
      {
        fields: ["name","name_es", "description","description_es", "date", "github", "deploy", "photo"],
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
},

updateProject:async function (req, res) {
  const { id } = req.params;
  const {name, name_es, description, description_es, date, github, deploy, photo } = req.body;
  try {
    const projects = await Project.findAll({
      attributes: [
        "id",
        "name",
        "name_es",
        "description",
        "description_es",
        "date",
        "github",
        "deploy",
        "photo",
      ],
      where: {
        id,
      },
    });

    if (projects.length > 0) {
      projects.forEach(async (project) => {
        await project.update({
          name,
          name_es,
          description,
          description_es,
          date,
          github,
          deploy,
          photo,
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
}