module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Prices', {
      priceId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      listPrice: {
        type: DataTypes.DECIMAL
      },
      retailPrice: {
        type: DataTypes.DECIMAL
      },
      savings: {
        type: DataTypes.DECIMAL
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