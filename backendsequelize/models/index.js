const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Role = require("./roles")(sequelize, DataTypes);
const User = require("./user")(sequelize, DataTypes);
const Schedule = require("./schedule")(sequelize, DataTypes);

Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, { foreignKey: "roleId" });

User.hasMany(Schedule, { foreignKey: "authorId", as: "Schedules" });
Schedule.belongsTo(User, { foreignKey: "authorId", as: "Author" });

sequelize.sync({ alter: true });

module.exports = { Role, User, Schedule };
