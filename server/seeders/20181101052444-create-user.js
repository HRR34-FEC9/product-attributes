const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createUsers = () => {
      const username = faker.internet.userName();
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
    return user = {username, createdAt, updatedAt};
    };

    const addUsers = () => {
      const users = [];
      for(let i = 0; i < 100; i ++) {
        users.push(createUsers());
      };
      return users;
    };

    return queryInterface.bulkInsert('Users', addUsers());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
