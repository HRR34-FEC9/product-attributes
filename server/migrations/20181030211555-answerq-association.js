'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn(
      "AnswerQs",
      "userId",
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
        "productId",
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
      "userId"
    )
    .then(() => {
      return queryInterface.removeColumn(
        "AnswerQs",
        "productId"
      )
    })
  }
};
