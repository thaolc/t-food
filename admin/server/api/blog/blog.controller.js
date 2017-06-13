/*
 * @Author: th_le
 * @Date:   2017-05-22 13:12:48
 * @Last Modified by:   th_le
 * @Last Modified time: 2017-06-13 10:35:14
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
    Blog.getBlogs(function(err, docs) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(200).json(docs);
    });
  },
  getById: function(req, res, next) {
    Blog.getBlogById(req.params.id, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(200).json(doc);
    });
  },
  create: function(req, res, next) {
    Blog.addBlog(req.body, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(201).json(doc);
    });
  },
  update: function(req, res, next) {
    Blog.updateBlog(req.params.id, req.body, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      // res.json(req);
      res.status(200).json(doc);
    });
  },
  delete: function(req, res, next) {
    Blog.deleteBlog(req.params.id, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(200).json(doc);
    });
  },
  deleteMany: function(req, res, next) {
    Blog.deleteBlogs(req.body, function(err, doc) {
      if(err) {
        res.status(500).send(err);
      }
      res.status(200).json(doc);
    });
  },
  datatable: function(req, res, next) {
    Blog.datatable({
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
