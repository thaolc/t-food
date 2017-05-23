/*
* @Author: th_le
* @Date:   2017-05-22 13:13:07
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-23 16:42:36
*/

'use strict';

var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  image: String,
  content: String,
  date: String,
  author: String
});

module.exports = mongoose.model('Blog', BlogSchema);

