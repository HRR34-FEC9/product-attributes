export default (sequelize, DataTypes) => {
  const Price = sequelize.define("price", {
    priceId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    listPrice: DataTypes.DECIMAL,
    RetailPrice: DataTypes.DECIMAL,
    Savings: DataTypes.STRING,
  });

  Price.associate = (models) => {
    Price.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
  };

  return Price;
}