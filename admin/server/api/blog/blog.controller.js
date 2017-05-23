/*
 * @Author: th_le
 * @Date:   2017-05-22 13:12:48
 * @Last Modified by:   th_le
 * @Last Modified time: 2017-05-23 16:30:30
 *
 * GET     /api/blogs              ->  list
 * POST    /api/blogs              ->  create
 * GET     /api/blogs/:id          ->  getById
 * PUT     /api/blogs/:id          ->  update
 * DELETE  /api/blogs/:id          ->  delete
 */

'use strict';

var _ = require('lodash');
var Blog = require('./blog.model');

module.exports = {
  list: function(req, res, next) {
    Blog.find().exec()
      .then(function(docs) {
        res.json(docs);
      })
      .catch(function(err) {
        res.status(500).send(err);
      })
  },
  getById: function(req, res, next) {
    Blog.find(req.params.id).exec()
      .then(function(doc) {
        if (!doc) {
          res.sendStatus(404).end();
          return null;
        }
        res.json(doc);
      })
      .catch(function(err) {
        res.status(500).send(err);
      })
  },
  create: function(req, res, next) {
    Blog.create(res.body)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(err) {
        res.status(500).send(err);
      })
  },
  update: function(req, res, next) {
    Blog.find(req.params.id).exec()
      .then(function(doc) {
        if (!doc) {
          res.sendStatus(404).end();
          return null;
        }
        return doc;
      })
      .then(function(doc) {
        var updated = _.merge(doc, req.body);
        updated.save()
          .then(function() {
            res.sendStatus(200);
          })
      })
      .catch(function(err) {
        res.status(500).send(err);
      })
  },
  delete: function(req, res, next) {
    Blog.find(req.params.id).exec()
      .then(function(doc) {
        if (!doc) {
          res.sendStatus(404).end();
          return null;
        }
        return doc;
      })
      .then(function(doc) {
        doc.remove()
          .then(function() {
            res.sendStatus(200);
          })
      })
      .catch(function(err) {
        res.status(500).send(err);
      })
  }
}
