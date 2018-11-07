const Price = require('../models').Price;

module.exports = {
  create(req, res) {
    return Price
      .create({
        listPrice: req.body.listPrice,
        retailPrice: req.body.retailPrice,
        savings: req.body.savings,
        sizeId: req.body.sizeId,
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
  retrieve(req, res) {
    return Price
      .findByPk(req.params.priceId)
      .then(price => {
        if (!price) {
          return res.status(404).send({
            message: 'Price Not Found'
          })
        }
        return res.status(200).send(price);
      })
      .catch(error => res.status(400).send(error));
  }
};