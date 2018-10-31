module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "Prices",
      "sizeId",
      {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        references: {
          model: 'ProductSizes',
          key: 'sizeId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Prices",
      "sizeId"
    )
  }
};
