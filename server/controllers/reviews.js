const Review = require('../models').Review;

module.exports = {
  create(req, res) {
    return Review
      .create({
        review: req.body.review,
        rating: req.body.rating,
        productId: req.body.productId,
        userId: req.body.userId,
      })
      .then(review => res.status(201).send(review))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return Review
      .findAll()
      .then(review => res.status(201).send(review))
      .catch(err => res.status(400).send(err));
  },
  retrieve(req, res) {
    return Review
    .findByPk(req.params.reviewId)
    .then(review => {
      if (!review) {
        return res.status(404).send({
          message: 'Review Not Found'
        })
      }
      return res.status(200).send(review);
    })
    .catch(error => res.status(400).send(error));
  }
};