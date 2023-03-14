const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/a2priora',{
    logging:true
  });

 module.exports = sequelize;