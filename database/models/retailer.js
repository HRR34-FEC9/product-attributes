export default (sequelize, DataTypes) => {
  const Retailer = sequelize.define("retailer", {
    companyId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    companyName: DataTypes.STRING,
  });

  return Retailer;
}