const Price = require('../models').Price;

module.exports = {
  create(req, res) {
    return Price
      .create({
        listPrice: req.body.listPrice,
        retailPrice: req.body.retailPrice,
        savings: req.body.savings,
        sizeId: req.params.sizeId,
      })
      .then(price => res.status(201).send(price))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return Price
      .all()
      .then(price => res.status(201).send(price))
      .catch(err => res.status(400).send(err));
  },
};