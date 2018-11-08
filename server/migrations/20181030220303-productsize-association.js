module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "ProductSizes",
      "productId",
      {
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'productId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "ProductSizes",
      "productId",
    )
  }
};
