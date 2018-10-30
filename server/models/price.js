module.exports = (sequelize, DataTypes) => {
  const Price = sequelize.define('Price', {
    priceId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    listPrice: DataTypes.DECIMAL,
    retailPrice: DataTypes.DECIMAL,
    savings: DataTypes.STRING,
  },
  {}
  );

  Price.associate = (models) => {
    Price.belongsTo(models.ProductSize, {
      foreignKey: 'sizeId',
      onDelete: 'CASCADE',
    })
  };

  return Price;
};