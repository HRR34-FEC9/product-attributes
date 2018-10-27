export default (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    productId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    productName: DataTypes.STRING,
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Retailer, {
      foreignKey: 'companyId',
    });
    Product.belongsTo(models.ProductSize, {
      foreignKey: 'sizeId',
    });
    Product.belongsTo(models.Price, {
      foreignKey: 'priceId',
    });
    Product.belongsTo(models.Description, {
      foreignKey: 'descriptionId',
    });
    Product.belongsTo(models.Reviews, {
      foreignKey: 'reviewsId',
    });
  };

  return Product;
}