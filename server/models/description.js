module.exports = (sequelize, DataTypes) => {
  const Description = sequelize.define('Description', {
    descriptionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    productDetails: DataTypes.TEXT,
    whatsIncluded: DataTypes.TEXT,
    packaging: DataTypes.STRING,
  },
  {});

  Description.associate = (models) => {
    Description.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
  };

  return Description;
};