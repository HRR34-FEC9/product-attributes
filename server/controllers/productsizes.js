const ProductSize = require('../models').ProductSize;

module.exports = {
  create(req, res) {
    return ProductSize
      .create({
        sizeDescription: req.body.sizeDescription,
        productId: req.body.productId,
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
  retrieve(req, res) {
    return ProductSize
      .findByPk(req.params.sizeId)
      .then(size => {
        if (!size) {
          return res.status(404).send({
            message: 'Size Not Found'
          })
        }
        return res.status(200).send(size);
      })
      .catch(error => res.status(400).send(error))
  },
};