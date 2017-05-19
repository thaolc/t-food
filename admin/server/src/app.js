/*
* @Author: th_le
* @Date:   2017-05-18 15:38:04
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-19 10:17:19
*/

'use strict';

var express = require('express');
var app = express();

require('./app.routes')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

exports = module.exports = app;