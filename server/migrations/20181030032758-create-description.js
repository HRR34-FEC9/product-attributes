module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Descriptions', {
      description_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      product_detail: {
        type: DataTypes.TEXT
      },
      whats_included: {
        type: DataTypes.TEXT
      },
      packaging: {
        type: DataTypes.STRING
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
    return queryInterface.dropTable('Descriptions');
  }
};