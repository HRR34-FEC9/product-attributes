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
    const companies = ['223569e0-ce1b-4ba4-962c-1054796d53ef', '5f9736ea-4496-466e-902c-6c169d8dfc3a', 'c4b443d0-bb42-471d-9b84-523b84093358','4d6c62d1-3fbe-4f88-a3a6-7409bd7ae2a5', '0f167806-ce3d-448f-9be0-36aa0464fbb2'];

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const createProduct = () => {
      const productId = uuidv4();
      const productName = faker.commerce.productName();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const companyId = companies[getRandomIndex(0,4)];
    return product = {productId, productName, createdAt, updatedAt, companyId};
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

