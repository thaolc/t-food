/*
* @Author: th_le
* @Date:   2017-05-22 13:14:45
* @Last Modified by:   th_le
* @Last Modified time: 2017-06-09 14:26:02
*/

'use strict';

var mongoose = require('mongoose');
var dataTables = require('mongoose-datatables');

var FoodSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String
});

FoodSchema.plugin(dataTables);

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
  Food.findByIdAndUpdate(id, doc, callback);
}

// Delete a Food
module.exports.deleteFood = function(id, callback) {
  var query = {_id: id};
  Food.remove(query, callback);
}

// Delete selected foods
module.exports.deleteFoods = function(params, callback) {
  var query = {_id: {$in: params}};
  Food.remove(query, callback);
}

// Datatable
module.exports.datatable = function(params, callback) {
  Food.dataTables(params, callback);
}