/*
 * @Author: th_le
 * @Date:   2017-05-22 13:14:35
 * @Last Modified by:   th_le
 * @Last Modified time: 2017-06-09 14:19:17
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
        res.status(500).send(err);
      }
      res.status(200).json(docs);
    });
  },
  getById: function(req, res, next) {
    Food.getFoodById(req.params.id, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(200).json(doc);
    });
  },
  create: function(req, res, next) {
    Food.addFood(req.body, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(201).json(doc);
    });
  },
  update: function(req, res, next) {
    Food.updateFood(req.params.id, req.body, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      // res.json(req);
      res.status(200).json(doc);
    });
  },
  delete: function(req, res, next) {
    Food.deleteFood(req.params.id, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(200).json(doc);
    });
  },
  deleteMany: function(req, res, next) {
    Food.deleteFoods(req.body, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(200).json(doc);
    });
  },
  datatable: function(req, res, next) {
    Food.datatable({
      limit: req.body.length,
      skip: req.body.start
    }, function(err, table) {
      if(err) {
        res.status(500).send(err);
      }
      res.json({
        data: table.data,
        recordsFiltered: table.total,
        recordsTotal: table.total
      });
    });
  }
}


