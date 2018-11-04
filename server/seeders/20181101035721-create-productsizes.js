const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const products = ['d25f2e7d-45ad-47f0-9003-e13905f62fcc', '1237e8b3-6c39-46b9-ae7d-c0f060a95d8f', '6a294299-6933-47d2-80d3-342a86f4bc15', '9ed7e8ed-8d32-4efe-b041-c1b833b730a4', '2c1e9db9-b579-4cc9-a4e5-41c26ebdd609']

    const createProductSize = () => {
      const sizeId = uuidv4();
      const sizeDescription = faker.finance.currencyCode();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const productId = products[getRandomIndex(0, 4)]
    return company = {sizeId, sizeDescription, createdAt, updatedAt, productId};
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
