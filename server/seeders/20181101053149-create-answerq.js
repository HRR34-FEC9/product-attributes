const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createAnswer = () => {
      const answerId= uuidv4();
      const answer = faker.internet.userName;
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
    return answer = {answerId, answer, createdAt, updatedAt};
    };

    const addAnswers = () => {
      const answers = [];
      for(let i = 0; i < 100; i ++) {
        answers.push(createAnswer());
      };
      return answers;
      };

    return queryInterface.bulkInsert("AnswerQs", addAnswers());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AnswerQs", null, {});
  }
};
