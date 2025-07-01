const statusCodes = require("../config/statusCodes");
const { TaskService } = require("../services/taskService");

//create Task
const createTask = async (req, res, next) => {
  try {
    const taskService = new TaskService();
    // console.log("Logged-in user ID:", req.user.id);
    const result = await taskService.createTask(req);
    return res.status(statusCodes.SUCCESS).json(result);
  } catch (error) {
    next(error);
  }
};
//All task for particular user
const getAllTasks = async (req, res, next) => {
  try {
    const taskService = new TaskService();
    const result = await taskService.getAllTasks(req.params.userId);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
//task by id 
const getTaskById = async (req, res, next) => {
  try {
    const taskService = new TaskService();
    const { id } = req.params;
    const result = await taskService.getTaskById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
//update task
const updateTask = async (req, res, next) => {
  try {
    const taskService = new TaskService();
    const result = await taskService.updateTask(
      req.params.id,
      req.body,
      req.user.id
    );
    return res.status(statusCodes.SUCCESS).json(result);
  } catch (error) {
    next(error);
  }
};
//remove task
const deleteTask = async (req, res, next) => {
  try {
    const taskService = new TaskService();
    const result = await taskService.deleteTask(req.params.id, req.user.id);
    return res.status(statusCodes.SUCCESS).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
