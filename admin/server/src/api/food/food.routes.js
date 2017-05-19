/*
* @Author: th_le
* @Date:   2017-05-19 10:39:54
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-19 10:48:24
*/

'use strict';

var express = require('express');

var controller = require('./food.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/', controller.destroy);

module.exports = router;