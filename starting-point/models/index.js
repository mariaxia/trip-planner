'use strict';

const db = require('./db');

// require all the models
const Hotel = require('./hotel.js');
const Restaurant = require('./restaurant.js');
const Activity = require('./activity.js');
const Place = require('./place.js');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;

/*
{
  Hotel: Hotel,
  Restaurant: Restaurant,
  Activity: Activity,
  Place: Place
};
*/
