'use strict'

var express = require('express');

// Controllers

var FilesController = require('../controllers/files.controller');

var router = express.Router();

// Routes

	// Student
		router.get('/get-file:fileName', FilesController.getFile);

module.exports = router;