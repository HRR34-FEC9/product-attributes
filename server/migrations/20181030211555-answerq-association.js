'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "AnswerQs",
      "UserId",
      {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: "Users",
          key: "userId",
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
    .then(() => {
      return queryInterface.addColumn(
        "AnswerQs",
        "ProductId",
        {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          references: {
            model: "Products",
            key: "productId",
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "AnswerQs",
      "UserId"
    )
    .then(() => {
      return queryInterface.removeColumn(
        "AnswerQs",
        "ProductId"
      )
    })
  }
};
