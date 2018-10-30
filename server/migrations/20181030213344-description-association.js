module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "Descriptions",
      "ProductId",
      {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        references: {
          model: 'Products',
          key: 'productId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Descriptions",
      "ProductId"
    );
  }
};
