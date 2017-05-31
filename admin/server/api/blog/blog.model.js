/*
* @Author: th_le
* @Date:   2017-05-22 13:13:07
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-31 15:57:15
*/

'use strict';

var mongoose = require('mongoose');
var dataTables = require('mongoose-datatables');

var BlogSchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
  date: String,
  author: String
});

BlogSchema.plugin(dataTables);

var Blog = module.exports = mongoose.model('Blog', BlogSchema);

// Get all blogs
module.exports.getBlogs = function(callback, limit) {
  Blog.find(callback).limit(limit);
}

// Get blog by Id
module.exports.getBlogById = function(id, callback) {
  Blog.findById(id, callback);
}

// Add a new blog
module.exports.addBlog = function(doc, callback) {
  Blog.create(doc, callback);
}

// Update a blog
module.exports.updateBlog = function(id, doc, callback) {
  Blog.findByIdAndUpdate(id, doc, callback);
}

// Delete a blog
module.exports.deleteBlog = function(id, callback) {
  var query = {_id: id};
  Blog.remove(query, callback);
}

// Delete selected blogs
module.exports.deleteBlogs = function(params, callback) {
  var query = {_id: { $in: params}};
  Blog.remove(query, callback);
}

// Datatable
module.exports.datatable = function(params, callback) {
  Blog.dataTables(params, callback);
}



