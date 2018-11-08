module.exports = (sequelize, DataTypes) => {
  const ProductSize = sequelize.define('ProductSize', {
    sizeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sizeDescription: DataTypes.STRING,
  });

  ProductSize.associate = function(models) {
    ProductSize.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
    ProductSize.hasMany(models.Price, {
      foreignKey: 'sizeId',
    });
  };

  return ProductSize;
};