module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Prices', {
      priceId: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      listPrice: {
        type: DataTypes.DECIMAL
      },
      retailPrice: {
        type: DataTypes.DECIMAL
      },
      savings: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Prices');
  }
};