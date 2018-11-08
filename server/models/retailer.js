module.exports = (sequelize, DataTypes) => {
  const Retailer = sequelize.define('Retailer', {
    companyId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    companyName: DataTypes.STRING,
    companyUrl: DataTypes.STRING
  });

  Retailer.associate = (models) => {
    Retailer.hasMany(models.Product, {
      foreignKey: 'companyId',
    });
  };

  return Retailer;
};