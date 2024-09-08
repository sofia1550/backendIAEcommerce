// models/OrderProducts.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const OrderProducts = sequelize.define('OrderProducts', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = OrderProducts;
