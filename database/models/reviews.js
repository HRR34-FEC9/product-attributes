module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("reviews", {
    reviewId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    review: DataTypes.TEXT,
    answeredQuestions: DataTypes.TEXT,
  });

  Reviews.associate = (models) => {
    Reviews.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Reviews
}