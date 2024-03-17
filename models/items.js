const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Item = sequelize.define('item', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

try {
  Item.sync();
} catch (error) {
  // eslint-disable-next-line no-extra-semi
  console.log('error', error);
}
module.exports = Item;
