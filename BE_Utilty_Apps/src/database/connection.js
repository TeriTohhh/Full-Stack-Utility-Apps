const { sequelize } = require("./models");

function connectToDatabase() {
  return sequelize
    .authenticate()
    .then(() => console.log("DB connection established"))
    .catch((err) => console.error("Error connecting to DB:", err));
}

module.exports = connectToDatabase
