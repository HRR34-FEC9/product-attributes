const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const products = ['19', '33', '41', '73', '88']

    const createProductSize = () => {
      const sizeDescription = faker.finance.currencyCode();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const productId = products[getRandomIndex(0, 4)]
    return company = {sizeDescription, createdAt, updatedAt, productId};
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
