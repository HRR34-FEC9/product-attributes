const Product = require('../models').Product;
const Retailer = require('../models').Retailer;
const ProductSize = require('../models').ProductSize;
const Price = require('../models').Price;
const Description = require('../models').Description;
const Review = require('../models').Review;
const User = require('../models').User;
const AnswerQ = require('../models').AnswerQ;

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
  },
  productInfo(req, res) {
    return Product
    .findAll({
      include: [
        {
          model: Retailer,
        },
        {
          model: ProductSize,
          include: [
            {
              model: Price,
            }
          ]
        },
        {
          model: Description,
        },
        {
          model: Review,
          include: [
            {
              model: User,
            }
          ]
        },
        // {
        //   model: AnswerQ,
        //   include: [
        //     {
        //       model: User,
        //     }
        //   ]
        // }
      ]
    })
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: 'Product Info Not Available'
        })
      }
      return res.status(200).send(product);
    })
    .catch(error => res.status(400).send(error));
  }
};