const task = require("../repository/models/task");
const user = require("../repository/models/user");

module.exports = {
  data: async (req, res) => {
    try {
      const tasks = await task.findAll();
      res.status(200).json({
        status: 200,
        message: "data successfully sent",
        tasks: tasks,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "server error",
        error: error.body,
      });
    }
  },
  index: async (req, res) => {
    try {
      const tasks = await task.findOne({
        where: {
          belongTo: req.params.id,
        },
      });
      if (tasks == null) {
        res.status(404).json({
          status: 404,
          message: "data not found",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "data successfully",
          task: tasks,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "server error.",
      });
    }
  },
  store: async (req, res) => {
    try {
      const users = await user.findOne({ where: { id: req.body.belongTo } });
      const tasks = await task.create({
        title: req.body.title,
        description: req.body.description,
        subtaskTo: req.body.subtaskTo,
        priority: req.body.priority,
        belongTo: users.name
      });
      res.status(201).json({
        status: 201,
        message: "data successfully sent",
        task: tasks,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "server error.",
        error: error,
      });
    }
  },
  update: async (req, res) => {
    try {
      const tasks = await task.update(
        {
          title: req.body.title,
          description: req.body.description,
          priority: req.body.priority,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        status: 200,
        message: "data successfully updated",
        task: tasks,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "server error.",
        error: error,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const tasks = await task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: 200,
        message: "data successfully deleted",
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "server error.",
        error: error,
      });
    }
  },
};
