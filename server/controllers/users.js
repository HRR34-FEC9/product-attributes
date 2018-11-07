const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
      })
      .then(user => res.status(201).send(user))
      .catch(err => res.status(400).send(err));
  },
  list(req, res) {
    return User
      .all()
      .then(user => res.status(201).send(user))
      .catch(err => res.status(400).send(err));
  },
  retrieve(req, res) {
    return User
      .findByPk(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        return res.status(200).send(user)
      })
      .catch(error => res.status(400).send(error));
  }
};