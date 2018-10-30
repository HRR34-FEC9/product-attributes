module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  },
  {});

  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Review.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
  };

  return Review;
};