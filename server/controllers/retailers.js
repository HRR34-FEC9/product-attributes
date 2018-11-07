const Retailer = require('../models').Retailer;

module.exports = {
  create(req, res) {
    return Retailer
      .create({
        companyName: req.body.companyName,
        companyUrl: req.body.companyUrl,
      })
      .then(retailer => res.status(201).send(retailer))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
  return Retailer
    .all()
    .then(retailer => res.status(201).send(retailer))
    .catch(err => res.status(400).send(err));
  },
  retrieve(req, res) {
    return Retailer
    .findByPk(req.params.retailerId)
    .then(retailer => {
      if (!retailer) {
        return res.status(404).send({
          message: 'Retailer Not Found'
        })
      }
      return res.status(200).send(retailer)
    })
    .catch(error => res.status(400).send(error))
  }
};