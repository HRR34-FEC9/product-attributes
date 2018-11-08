const faker = require('faker');
const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {

    const getRandomIndex =function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const products = ['19', '33', '41', '73', '88'];

    const users = ['7', '26', '41', '53', '80'];

    const createReviews = () => {
      let review = faker.lorem.paragraphs(1, "\n \r");
      const rating = faker.random.number({min:0, max:5});
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
      const userId = users[getRandomIndex(0, 4)];
      const productId = products[getRandomIndex(0,4)];
    return review = {review, rating, createdAt, updatedAt, userId, productId};
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
