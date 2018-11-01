const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createProductSize = () => {
      const sizeId = uuidv4();
      const sizeDescription = faker.finance.currencyCode();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
    return company = {sizeId, sizeDescription, createdAt, updatedAt};
    };

    const addProductSize = () => {
      const productSizes = [];
      for(let i = 0; i < 100; i ++) {
        productSizes.push(createProductSize());
      };
      return productSizes;
    };

    return queryInterface.bulkInsert('ProductSizes', addProductSize());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductSizes', null, {});
  }
};
