'use strict';
var gulp = require('gulp'),
runSequence = require('run-sequence');


gulp.task('prod', [], function(cb) {
	gulp.src('env/production/constants.js')
	.pipe(gulp.dest('app/public/js/'));

	runSequence(['styles', 'fonts', 'views', 'browserify'], cb);
});


// 'use strict';
// Old production
// var gulp = require('gulp'),
// 	browserSync = require('browser-sync'),
// 	runSequence = require('run-sequence');

// gulp.task('production', ['browserify', 'styles', 'express', 'watch'], function() {
//   browserSync.init({
//      server: './app'
//    });
// });
