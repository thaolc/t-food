/*
* @Author: th_le
* @Date:   2017-05-22 13:14:55
* @Last Modified by:   th_le
* @Last Modified time: 2017-06-09 13:25:00
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
router.post('/delete-many', controller.deleteMany);
router.post('/datatable', controller.datatable);

module.exports = router;