const { Sequelize } = require("sequelize");
const config = require("./config");
 
// Create a new Sequelize instance
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    timezone: config.timezone,
    logging: false,
  }
);
 
module.exports = sequelize;