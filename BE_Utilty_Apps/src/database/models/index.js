const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const config = require("../../config/config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Import models
const Task = require("./task")(sequelize, DataTypes);
const User = require("./users")(sequelize, DataTypes);

// Define database object
const db = {
  sequelize,
  Sequelize,
  // Project, // Export Project model
  Task,
  User
};

// Authenticate and sync database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");

    // Sync all models (Creates tables if they don't exist)
    // await sequelize.sync({ alter: true }); // Use `force: true` if you want to drop and recreate tables
      // Just authenticate, do not sync
await sequelize.authenticate();
    console.log("✅ Tables synced successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
})();

module.exports = db;
