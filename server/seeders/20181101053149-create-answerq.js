const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const products = ['d25f2e7d-45ad-47f0-9003-e13905f62fcc', '1237e8b3-6c39-46b9-ae7d-c0f060a95d8f', '6a294299-6933-47d2-80d3-342a86f4bc15', '9ed7e8ed-8d32-4efe-b041-c1b833b730a4', '2c1e9db9-b579-4cc9-a4e5-41c26ebdd609'];

    const users = ['532ef330-1129-4b61-877e-bbca12ec6046', '49edcde9-de26-440b-ac09-9c29e2294f79', '65c7a772-3e6c-4c56-9cb4-4faa5a6eb526', '613ad500-77d4-4772-8224-6ac6b2e88d12', '493234e2-2364-46ab-a905-0858cbc90898'];

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const createAnswer = () => {
      const answerId= uuidv4();
      let answer = faker.lorem.paragraphs(1, "\n \r");
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const userId = users[getRandomIndex(0, 4)];
      const productId = products[getRandomIndex(0, 4)];
    return answer = {answerId, answer, createdAt, updatedAt, userId,productId};
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
