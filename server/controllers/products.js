const Product = require('../models').Product;

module.exports = {
  create(req, res) {
    return Product
      .create({
        productName: req.body.productName,
        companyId: req.params.companyId,
      })
      .then(product => res.status(201).send(product))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return Product
      .all()
      .then(product => res.status(201).send(product))
      .catch(err => res.status(400).send(err));
  },
};