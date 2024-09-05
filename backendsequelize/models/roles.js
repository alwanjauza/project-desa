module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      role: { type: DataTypes.STRING, allowNull: false },
    },
    {
      timestamps: true,
      tableName: "roles",
    }
  );

  return Role;
};
