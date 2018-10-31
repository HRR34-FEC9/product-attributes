const ProductSize = require('../models').ProductSize;

module.exports = {
  create(req, res) {
    return ProductSize
      .create({
        sizeDescription: req.body.sizeDescription,
        productId: req.params.productId,
      })
      .then(productSize => res.status(201).send(productSize))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return ProductSize
      .all()
      .then(productSize => res.status(201).send(productSize))
      .catch(err => res.status(400).send(err));
  },
};