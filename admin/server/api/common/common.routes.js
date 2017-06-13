/*
* @Author: th_le
* @Date:   2017-06-13 10:32:02
* @Last Modified by:   th_le
* @Last Modified time: 2017-06-13 10:34:57
*/

'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./common.controller');

router.post('/uploader', controller.uploader);

module.exports = router;