/*
 * @Author: th_le
 * @Date:   2017-05-22 13:14:35
 * @Last Modified by:   th_le
 * @Last Modified time: 2017-05-24 13:22:46
 *
 * GET     /api/foods              ->  list
 * POST    /api/foods              ->  create
 * GET     /api/foods/:id          ->  getById
 * PUT     /api/foods/:id          ->  update
 * DELETE  /api/foods/:id          ->  delete
 */

'use strict';

var _ = require('lodash')
var Food = require('./food.model');

module.exports = {
  list: function(req, res, next) {
    Food.getFoods(function(err, docs) {
      if(err) {
        throw err;
      }
      res.json(docs);
    });
  },
  getById: function(req, res, next) {
    Food.getFoodById(req.params.id, function(err, doc) {
      if(err) {
        throw err;
      }
      res.json(doc);
    });
  },
  create: function(req, res, next) {
    Food.addFood(req.body, function(err, doc) {
      if(err) {
        throw err;
      }
      res.json(doc);
    });
  },
  update: function(req, res, next) {
    Food.updateFood(req.params.id, req.body, function(err, doc) {
      if(err) {
        throw err;
      }
      // res.json(req);
      res.json(doc);
    });
  },
  delete: function(req, res, next) {
    Food.deleteFood(req.params.id, function(err, doc) {
      if(err) {
        throw err;
      }
      res.json(doc);
    });
  }
}


