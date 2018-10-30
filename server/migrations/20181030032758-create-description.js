module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Descriptions', {
      description_id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
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