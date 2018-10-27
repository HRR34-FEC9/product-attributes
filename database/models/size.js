export default (sequelize, DataTypes) => {
  const ProductSize = sequelize.define("productSize", {
    sizeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    sizeDescription: DataTypes.STRING,
  });

  ProductSize.associate = (models) => {
    ProductSize.belongsTo(models.Price, {
      foreignKey: 'priceId',
    });
    ProductSize.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
  };

  return ProductSize;
}