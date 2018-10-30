'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductSize = sequelize.define('ProductSize', {
   sizeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    sizeDescription: DataTypes.STRING,
  },
  {});

  ProductSize.associate = function(models) {
    ProductSize.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
    Product.hasMany(models.Price, {
      foreignKey: 'priceId',
    })
  };

  return ProductSize;
};