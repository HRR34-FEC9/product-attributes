const Description = require('../models').Description;

module.exports = {
  create(req, res) {
    return Description
      .create({
        product_detail: req.body.product_detail,
        whats_included: req.body.whats_included,
        packaging: req.body.packaging,
        productId: req.body.productId,
      })
      .then(description => res.status(201).send(description))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return Description
      .all()
      .then(description => res.status(201).send(description))
      .catch(err => res.status(400).send(err));
  },
};