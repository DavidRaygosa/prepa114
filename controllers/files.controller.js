'use strict'

var express = require('express');

var controller_files = 
{

	getFile: (req, res) =>
	{
		let nameFile = req.params.fileName;
    	let filePath = "./uploads/files/"+nameFile;
    	res.download(filePath);
	},
}

module.exports = controller_files;