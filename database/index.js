import Sequelize from 'sequelize';

const sequelize = new Sequelize('pattribs', 'hrr34-fec9', 'hrr34-fec9', {
  dialect: 'postgres'
});

const models = {
  Product: sequelize.import('./models/product');
  Retailer: sequelize.import('./models/retailer');
  ProductSize: sequelize.import('./models/size');
  Price: sequelize.import('./models/price');
  Description: sequelize.import('./models/description');
  Reviews: sequelize.import('./models/reviews');
};

//if there is an association in the model then create the association
//between the models.
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

export default models;