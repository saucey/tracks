'use strict';
var gulp   = require('gulp');
var gutil  = require('gulp-util');
var http   = require('http');
var config = require('../../config');

gulp.task('express', function() {

	var express = require('express');
	var server = express();
	// server.use(require('connect-livereload')({port: 4002}));
	// server.use(express.static(config.dist.root));
	server.use(express.static('/build'));

	// Serve index.html for all routes to leave routing up to Angular
	// server.all('/*', function(req, res) {
	// 	res.sendFile('index.html', { root: 'build' });
	// });

	// // Start webserver if not already running
	// var s = http.createServer(server);
	// s.on('error', function(err){
	// 	if(err.code === 'EADDRINUSE'){
	// 		gutil.log('Development server is already started at port ' + config.serverport);
	// 	}
	// 	else {
	// 		throw err;
	// 	}
	// });

	// s.listen(config.serverport);

});