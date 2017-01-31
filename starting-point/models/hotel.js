'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const Hotel = db.define('hotel', {
  name: {type: Sequelize.STRING, allowNull: false},
  num_stars: {type: Sequelize.FLOAT, allowNull: false},
  amenities: {type: Sequelize.STRING}
}, {});

module.exports = Hotel;
