const answerqsController = require('../controllers').answerqs;
const descriptionsController = require('../controllers').descriptions;
const pricesController = require('../controllers').prices;
const productsController = require('../controllers').products;
const productSizesController = require('../controllers').productSizes;
const retailersController = require('../controllers').retailers;
const reviewsController = require('../controllers').reviews;
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api/answerqs', (req, res) =>
    res.status(200).send({message: 'Successfully Connected To AnswerQs API'})
  );
  app.post('/api/answerqs/q', answerqsController.create);
  app.get('/api/answerqs/q', answerqsController.list);
  app.get('/api/answerqs/q/:answerId', answerqsController.retrieve);

  app.get('/api/descriptions', (req, res) =>
    res.status(200).send({message: 'Successfully Connected To Descriptions API'})
  );
  app.post('/api/descriptions/q', descriptionsController.create);
  app.get('/api/descriptions/q', descriptionsController.list);
  app.get('/api/descriptions/q/:descriptionId', descriptionsController.retrieve);

  app.get('/api/prices', (req, res) =>
    res.status(200).send({message: 'Successfully Connected To Prices API'})
  );
  app.post('/api/prices/q', pricesController.create);
  app.get('/api/prices/q', pricesController.list);
  app.get('/api/prices/q/:priceId', pricesController.retrieve);

  app.get('/api/productdata', (req, res) =>
  res.status(200).send({message: 'Successfully Connected To Products API'})
  );
  app.post('/api/productdata/q', productsController.create);
  app.get('/api/productdata/q', productsController.list);
  app.get('/api/productdata/q/:productId', productsController.retrieve);
  app.get('/api/productdata/product', productsController.productInfo)

  app.get('/api/productsizes', (req, res) =>
  res.status(200).send({message: 'Successfully Connected To ProductSizes API'})
  );
  app.post('/api/productsizes/q', productSizesController.create);
  app.get('/api/productsizes/q', productSizesController.list);
  app.get('/api/productsizes/q/:sizeId', productSizesController.retrieve);

  app.get('/api/retailers', (req, res) =>
  res.status(200).send({message: 'Successfully Connected To Retailers API'})
  );
  app.post('/api/retailers/q', retailersController.create);
  app.get('/api/retailers/q', retailersController.list);
  app.get('/api/retailers/q/:retailerId', retailersController.retrieve);

  app.get('/api/reviews', (req, res) =>
  res.status(200).send({message: 'Successfully Connected To Reviews API'})
  );
  app.post('/api/reviews/q', reviewsController.create);
  app.get('/api/reviews/q', reviewsController.list);
  app.get('/api/reviews/q/:reviewId', reviewsController.retrieve);

  app.get('/api/users', (req, res) =>
  res.status(200).send({message: 'Successfully Connected To Users API'})
  );
  app.post('/api/users/q', usersController.create);
  app.get('/api/users/q', usersController.list);
  app.get('/api/users/q/:userId', usersController.retrieve);
};