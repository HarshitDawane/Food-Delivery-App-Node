const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'postgres',
  username: 'postgres',
  password: 'Harshit@123',
  host: 'localhost',
  port: 5432,
});

module.exports = sequelize;
