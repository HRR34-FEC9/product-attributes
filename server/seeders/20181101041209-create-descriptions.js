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

    const createDescription = () => {
      const description_id = uuidv4();
      const product_detail = faker.lorem.paragraphs();
      const whats_included = faker.lorem.lines();
      const packaging = faker.lorem.sentence();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const productId = products[getRandomIndex(0,4)];
    return description = {description_id, product_detail, whats_included, packaging,createdAt, updatedAt, productId};
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
