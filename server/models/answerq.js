module.exports = (sequelize, DataTypes) => {
  const AnswerQ = sequelize.define("AnswerQ", {
    answerId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    answer: {
      type: DataTypes.TEXT,
    },
  });

  AnswerQ.associate = (models) => {
    AnswerQ.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    AnswerQ.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
  }

  return AnswerQ;
};