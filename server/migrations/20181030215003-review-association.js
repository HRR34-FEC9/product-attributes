module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "Reviews",
      "userId",
      {
        type: DataTypes.INTEGER,
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
        "productId",
        {
        type: DataTypes.INTEGER,
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
      "userId",
    )
    .then(() => {
      return queryInterface.removeColumn(
        "Reviews",
        "productId",
      )
    })
  }
};
