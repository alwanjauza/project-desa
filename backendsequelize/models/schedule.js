module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: true },
      date: { type: DataTypes.DATE, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
      authorId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      timestamps: true,
      tableName: "schedules",
    }
  );

  // Define associations
  Schedule.associate = (models) => {
    Schedule.belongsTo(models.User, { foreignKey: "authorId", as: "Author" });
  };

  return Schedule;
};
