/*
* @Author: th_le
* @Date:   2017-05-22 13:13:38
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-22 16:54:27
*/

'use strict';

var blog = require('./api/blog/blog.routes');
var food = require('./api/food/food.routes');

module.exports = function(app) {
  app.use('/api/blogs', blog);
  app.use('/api/foods', food);
}



