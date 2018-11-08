const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const products = ['19', '33', '41', '73', '88'];

    const createDescription = () => {
      const product_detail = faker.lorem.sentence();
      const whats_included = faker.lorem.lines();
      const packaging = faker.lorem.sentence();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const productId = products[getRandomIndex(0,4)];
    return description = {product_detail, whats_included, packaging,createdAt, updatedAt, productId};
    };
    const addDescription = () => {
      const descriptions = [];
      for(let i = 0; i < 100; i ++) {
        descriptions.push(createDescription());
      };
      return descriptions;
    };

    return queryInterface.bulkInsert('Descriptions', addDescription());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Descriptions', null, {});
  }
};
