'use strict';
var gulp = require('gulp'),
runSequence = require('run-sequence');


gulp.task('dev', [], function(cb) {

	runSequence(['styles', 'images', 'fonts', 'views', 'browserify'], 'watch', cb);

});

