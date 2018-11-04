const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {

     const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const productSizes = ['0a3568f3-1136-4642-96d1-2a2aeac15947', 'c198230b-fa34-48ac-b06f-ba101c4661d4', '62d3e0fa-4d96-4125-a44b-e035d505b5c4', 'c53fae0e-4f05-4a49-8936-461b90232173', '93acf1a5-ea11-420b-9782-fb1e8ea541de']

    const createPrices = () => {
      const priceId = uuidv4();
      const listPrice = faker.finance.amount(.99, 100.00, 2);
      const retailPrice = faker.finance.amount(101.00, 300.00, 2);
      const savings = (retailPrice - listPrice).toFixed(2);
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const sizeId = productSizes[getRandomIndex(0,4)];
    return price = {priceId, listPrice, retailPrice, savings, createdAt, updatedAt, sizeId};
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
