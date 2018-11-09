const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {

     const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const productSizes = ['2', '12', '22', '32', '42']
    var i = 0;
    function increment() {
      return ++i;
    }

    const createPrices = () => {
      const listPrice = faker.finance.amount(.99, 100.00, 2);
      const retailPrice = faker.finance.amount(101.00, 300.00, 2);
      const savings = (retailPrice - listPrice).toFixed(2);
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const sizeId = increment();
    return price = {listPrice, retailPrice, savings, createdAt, updatedAt, sizeId};
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
