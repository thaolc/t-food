/*
* @Author: th_le
* @Date:   2017-06-13 10:32:41
* @Last Modified by:   th_le
* @Last Modified time: 2017-06-15 13:13:36
*/

'use strict';

//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('image');

module.exports = {
  uploader: function(req, res, next) {
  	var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }
        // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for " + path);
  	});
  }
}