const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createDescription = () => {
      const description_id = uuidv4();
      const product_detail = faker.lorem.paragraphs();
      const whats_included = faker.lorem.lines();
      const packaging = faker.lorem.sentence();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
    return description = {description_id, product_detail, whats_included, packaging,createdAt, updatedAt};
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
