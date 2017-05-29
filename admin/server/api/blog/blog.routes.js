/*
* @Author: th_le
* @Date:   2017-05-22 13:13:22
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-29 10:47:40
*/

'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./blog.controller');

router.get('/', controller.list);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.post('/', controller.dataTables);

module.exports = router;