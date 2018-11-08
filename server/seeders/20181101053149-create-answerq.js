const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const products = ['19', '33', '41', '73', '88'];

    const users = ['7', '26', '41', '53', '80'];

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const createAnswer = () => {
      let answer = faker.lorem.paragraphs(1, "\n \r");
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const userId = users[getRandomIndex(0, 4)];
      const productId = products[getRandomIndex(0, 4)];
    return answer = {answer, createdAt, updatedAt, userId,productId};
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
