const faker = require('faker');
const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {
    const createReviews = () => {
      const reviewId = uuidv4();
      let review = faker.lorem.paragraphs(1, "\n \r");
      const rating = faker.random.number({min:0, max:5});
      const createdAt = faker.date.past();
      const updatedAt = faker.date.recent();
    return review = {reviewId, review, rating, createdAt, updatedAt};
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
