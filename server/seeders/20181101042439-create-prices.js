const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createPrices = () => {
      const priceId = uuidv4();
      const listPrice = faker.finance.amount(.99, 100.00, 2);
      const retailPrice = faker.finance.amount(101.00, 300.00, 2);
      const savings = (retailPrice - listPrice).toFixed(2);
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
    return price = {priceId, listPrice, retailPrice, savings, createdAt, updatedAt};
    };
    const addPrices = () => {
      const prices = [];
      for(let i = 0; i < 100; i ++) {
        prices.push(createPrices());
      };
      return prices;
      };

    return queryInterface.bulkInsert('Prices', addPrices());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Prices', null, {});
  }
};
