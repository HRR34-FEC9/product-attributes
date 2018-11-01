const AnswerQ = require('../models').AnswerQ;

module.exports = {
  create(req, res) {
    return AnswerQ
      .create({
        answer: req.body.answer,
        userId: req.body.userId,
        productId: req.body.productId,
      })
      .then(answer => res.status(201).send(answer))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
  return AnswerQ
    .all()
    .then(answer => res.status(201).send(answer))
    .catch(err => res.status(400).send(err));
  },
};