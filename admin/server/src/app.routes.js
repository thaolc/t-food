/*
* @Author: th_le
* @Date:   2017-05-18 15:39:40
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-19 10:48:56
*/

'use strict';

module.exports = function(app) {
  app.use('/api/blogs', require('./api/blog/blog.routes'));
  app.use('/api/foods', require('./api/food/food.routes'));
}