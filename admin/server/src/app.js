/*
* @Author: th_le
* @Date:   2017-05-18 15:38:04
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-18 16:27:24
*/

'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

