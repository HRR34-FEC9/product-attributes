module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Retailers', {
      companyId: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
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