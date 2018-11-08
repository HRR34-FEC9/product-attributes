module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Retailers', {
      companyId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      companyName: {
        type: DataTypes.STRING
      },
      companyUrl: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Retailers');
  }
};