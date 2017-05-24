/*
* @Author: th_le
* @Date:   2017-05-22 13:14:45
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-24 13:40:16
*/

'use strict';

var mongoose = require('mongoose');

var FoodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String
})

var Food = module.exports = mongoose.model('Food', FoodSchema);


// Get all Foods
module.exports.getFoods = function(callback, limit) {
  Food.find(callback).limit(limit);
}

// Get Food by Id
module.exports.getFoodById = function(id, callback) {
  Food.findById(id, callback);
}

// Add a new Food
module.exports.addFood = function(doc, callback) {
  Food.create(doc, callback);
}

// Update a Food
module.exports.updateFood = function(id, doc, callback) {
  var updates = {
    name: doc.name,
    price: doc.price,
    image: doc.image,
    description: doc.description
  }
  Food.findByIdAndUpdate(id, updates, callback);
}

// Delete a Food
module.exports.deleteFood = function(id, callback) {
  var query = {_id: id};
  Food.remove(query, callback);
}