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
  retrieve(req, res) {
    return AnswerQ
      .findByPk(req.params.answerId)
      .then(answer => {
        if (!answer) {
          return res.status(404).send({
            message: 'Answer Not Found'
          })
        }
        return res.status(200).send(answer);
      })
      .catch(error => res.status(400).send(error))
  },
};