/*
* @Author: th_le
* @Date:   2017-05-18 15:47:41
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-19 10:43:35
*/

'use strict';

var express = require('express');

var controller = require('./blog.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;