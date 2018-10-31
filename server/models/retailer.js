module.exports = (sequelize, DataTypes) => {
  const Retailer = sequelize.define('Retailer', {
    companyId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    companyName: DataTypes.STRING,
    companyUrl: DataTypes.STRING
  });

  Retailer.associate = (models) => {
    Retailer.hasMany(models.Product, {
      foreignKey: 'productId',
    });
  };

  return Retailer;
};