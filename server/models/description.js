module.exports = (sequelize, DataTypes) => {
  const Description = sequelize.define('Description', {
    description_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    product_detail: DataTypes.TEXT,
    whats_included: DataTypes.TEXT,
    packaging: DataTypes.STRING,
  });

  Description.associate = (models) => {
    Description.belongsTo(models.Product, {
      foreignKey: 'productId',
    });
  };

  return Description;
};