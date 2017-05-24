/*
* @Author: th_le
* @Date:   2017-05-22 13:14:55
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-24 13:23:08
*/

'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./food.controller');

router.get('/', controller.list);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;