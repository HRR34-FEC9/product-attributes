module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    }
  },
  {});

  User.associate = (models) => {
    User.hasMany(models.Review, {
      foreignKey: "userId",
    });
    User.hasMany(models.AnswerQ, {
      foreignKey: "userId",
    });
  };

  return User;
};