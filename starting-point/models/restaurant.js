'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const Restaurant = db.define('restaurant', {
  name: {type: Sequelize.STRING, allowNull: false},
  cuisine: {type: Sequelize.STRING, allowNull: false},
  price: {type: Sequelize.INTEGER}
}, {});

module.exports = Restaurant;
