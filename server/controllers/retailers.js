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
};