const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'verceldb',
  username: 'default',
  password: 'yQao0Phpn7kX',
  host: 'ep-floral-salad-a4dtemjj-pooler.us-east-1.aws.neon.tech',
  port: 5432,
  dialectOptions:{
    ssl: {
      require: true,
    }
  }
});

module.exports = sequelize;
