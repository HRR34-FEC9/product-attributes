module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "Reviews",
      "UserId",
      {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        references : {
          model: 'Users',
          key: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    )
    .then(() => {
      return queryInterface.addColumn(
        "Reviews",
        "ProductId",
        {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        references : {
          model: 'Products',
          key: 'productId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        },
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Reviews",
      "UserId",
    )
    .then(() => {
      return queryInterface.removeColumn(
        "Reviews",
        "ProductId",
      )
    })
  }
};
