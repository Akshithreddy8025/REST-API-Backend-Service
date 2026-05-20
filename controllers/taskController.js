const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const search = req.query.search || '';
    const completed = req.query.completed;
    const sort = req.query.sort || 'newest';

    const query = {
      user: req.user._id,
      title: {
        $regex: search,
        $options: 'i',
      },
    };

    if (completed === 'true') {
      query.completed = true;
    }

    if (completed === 'false') {
      query.completed = false;
    }

    const sortOption =
      sort === 'oldest'
        ? { createdAt: 1 }
        : { createdAt: -1 };

    const tasks = await Task.find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort(sortOption);

    const totalTasks = await Task.countDocuments(query);

    res.json({
      page,
      limit,
      totalTasks,
      totalPages: Math.ceil(totalTasks / limit),
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const task = await Task.create({
      user: req.user._id,
      title,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: 'Task not found',
      });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: 'Not authorized',
      });
    }

    task.title = req.body.title || task.title;

    if (req.body.completed !== undefined) {
      task.completed = req.body.completed;
    }

    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: 'Task not found',
      });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: 'Not authorized',
      });
    }

    await task.deleteOne();

    res.json({
      message: 'Task removed',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};