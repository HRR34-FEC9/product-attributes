const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const companies = ['1', '15', '28','40', '55'];

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const createProduct = () => {
      const productName = faker.commerce.productName();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const companyId = companies[getRandomIndex(0,4)];
    return product = {productName, createdAt, updatedAt, companyId};
    };

    const addProduct = () => {
      const products = [];
      for(let i = 0; i < 100; i ++) {
        products.push(createProduct());
      };
      return products;
    };

    return queryInterface.bulkInsert('Products', addProduct())
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Products', null, {});
  }
};

