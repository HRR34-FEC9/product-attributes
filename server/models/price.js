module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    priceId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    listPrice: DataTypes.DECIMAL,
    retailPrice: DataTypes.DECIMAL,
    savings: DataTypes.DECIMAL,
  });

  Price.associate = (models) => {
    Price.belongsTo(models.ProductSize, {
      foreignKey: 'sizeId',
    })
  };

  return Price;
};