const { Task, sequelize } = require("../database/models");
const BaseService = require("./baseService");

class TaskService extends BaseService {
  constructor() {
    super(Task);
  }
  async createTask(req) {
    let transaction;
    try {
      transaction = await sequelize.transaction();
      const { title, description } = req.body;

      const task = await Task.create({
        title,
        description,
        user_id:req.user.id , 
      }, { transaction });

      await transaction.commit();
      return {
        message: "Task created successfully",
        data: task.dataValues,
      };
    } catch (error) {
      if (transaction) await transaction.rollback();
      throw new Error("Task creation failed: " + error.message);
    }
  }

  async getAllTasks(userId) {
    try {
      const tasks = await Task.findAll({
        where: {
          user_id: userId,
          is_deleted: false,
        },
      });
  
      return {
        message: "Tasks fetched successfully",
        data: tasks,
      };
    } catch (error) {
      throw new Error("Failed to fetch tasks: " + error.message);
    }
  }

  async getTaskById(id) {
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        throw new Error("Task not found");
      }
      return { message: "Task fetched successfully", data: task };
    } catch (error) {
      throw new Error("Failed to fetch task: " + error.message);
    }
  }

  async updateTask(taskId, data, userId) {
    let transaction;
    try {
      transaction = await sequelize.transaction();
      const [updated] = await Task.update(data, {
        where: {
          id: taskId,
          user_id: userId, // 👈 ensures user can only update their own task
        },
        transaction,
      });
  
      await transaction.commit();
      if (updated) {
        return { message: "Task updated successfully" };
      }
      throw new Error("Task not found or not authorized");
    } catch (error) {
      if (transaction) await transaction.rollback();
      throw new Error("Failed to update task: " + error.message);
    }
  }

  async deleteTask(taskId, userId) {
    let transaction;
    try {
      transaction = await sequelize.transaction();
  
      const [updated] = await Task.update(
        { is_deleted: true },
        {
          where: {
            id: taskId,
            user_id: userId, // Ensures user can only delete their own tasks
            is_deleted: false, // Avoid double-deleting
          },
          transaction,
        }
      );
  
      await transaction.commit();
  
      if (updated) {
        return { message: "Task soft-deleted successfully" };
      }
  
      throw new Error("Task not found or unauthorized");
    } catch (error) {
      if (transaction) await transaction.rollback();
      throw new Error("Failed to soft-delete task: " + error.message);
    }
  }
  
}

module.exports = {
  TaskService,
};
