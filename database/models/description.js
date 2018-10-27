export default (sequelize, DataTypes) => {
  const Description = sequelize.define("description", {
    descriptionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    productDetails: DataTypes.TEXT,
    whatsIncluded: DataTypes.TEXT,
    packaging: DataTypes.STRING,
  });

  Description.associate = (models) => {
    Description.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
  };

  return Description
}