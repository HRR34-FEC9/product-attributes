const faker = require('faker');
const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const products = ['d25f2e7d-45ad-47f0-9003-e13905f62fcc', '1237e8b3-6c39-46b9-ae7d-c0f060a95d8f', '6a294299-6933-47d2-80d3-342a86f4bc15', '9ed7e8ed-8d32-4efe-b041-c1b833b730a4', '2c1e9db9-b579-4cc9-a4e5-41c26ebdd609'];

    const users = ['0186771e-cce2-4330-9cf7-b1685280301b', '5177f75f-dec6-4783-b305-8d9ed6d53f29', '15f0e402-68dc-48d4-b249-feadba52fc0f', '613ad500-77d4-4772-8224-6ac6b2e88d12', 'b3344373-161e-475b-8dde-ba2c943cec42'];

    const createReviews = () => {
      const reviewId = uuidv4();
      let review = faker.lorem.paragraphs(1, "\n \r");
      const rating = faker.random.number({min:0, max:5});
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const userId = users[getRandomIndex(0, 4)];
      const productId = products[getRandomIndex(0,4)];
    return review = {reviewId, review, rating, createdAt, updatedAt, userId, productId};
    };

    const addReviews = () => {
      const reviews = [];
      for(let i = 0; i < 100; i ++) {
        reviews.push(createReviews());
      };
      return reviews;
      };

    return queryInterface.bulkInsert('Reviews', addReviews());
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
