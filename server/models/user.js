module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    }
  });

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