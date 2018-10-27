module.exports = (sequelize, DataTypes) => {
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


  return Description
};