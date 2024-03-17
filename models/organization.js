const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Organization = sequelize.define('organization', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

try {
  Organization.sync();
} catch (error) {
  console.log('error', error);
}
module.exports = Organization;
