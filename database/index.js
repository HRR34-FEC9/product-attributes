const Sequelize = require('sequelize');


const sequelize = new Sequelize('pattribs', 'fec9', 'fec9', {
  dialect: 'postgres'
});

const models = {
  Product: require('./models/product')(sequelize, Sequelize),
  Retailer: require('./models/retailer')(sequelize, Sequelize),
  ProductSize: require('./models/size')(sequelize, Sequelize),
  Price: require('./models/price')(sequelize, Sequelize),
  Description: require('./models/description')(sequelize, Sequelize),
  Reviews: require('./models/reviews')(sequelize, Sequelize),
  User: require('./models/user')(sequelize, Sequelize)
};

//if there is an association in the model then create the association
//between the models.
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;