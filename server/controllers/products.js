const Product = require('../models').Product;

module.exports = {
  create(req, res) {
    return Product
      .create({
        productName: req.body.productName,
        companyId: req.body.companyId,
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
  retrieve(req, res) {
    return Product
      .findByPk(req.params.productId)
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found'
          })
        }
        return res.status(200).send(product);
      })
      .catch(error => res.status(400).send(error))
  }
};