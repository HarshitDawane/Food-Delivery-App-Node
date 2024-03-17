const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Pricing = sequelize.define('pricing', {
  organization_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  base_distance_in_km: {
    type: DataTypes.INTEGER,
  },
  zone: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  km_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fix_price: {
    type: DataTypes.INTEGER,
  },
});

try {
  Pricing.sync();
} catch (error) {
  console.log('error', error);
}
module.exports = Pricing;
