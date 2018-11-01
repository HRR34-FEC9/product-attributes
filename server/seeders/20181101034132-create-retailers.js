const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createRetailer = () => {
      const companyId = uuidv4();
      const companyName = faker.company.companyName();
      const companyUrl = faker.internet.url();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
    return company = {companyId, companyName, companyUrl, createdAt, updatedAt};
    };

    const addRetailer = () => {
      const retailers = [];
      for(let i = 0; i < 100; i ++) {
        retailers.push(createRetailer());
      };
      return retailers;
    };

    return queryInterface.bulkInsert('Retailers', addRetailer());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Retailers', null, {});
  }
};
