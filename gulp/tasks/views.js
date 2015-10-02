'use strict';

var config        = require('../../config');
var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var browserSync   = require('browser-sync');
var gulpif        = require('gulp-if');
var reload        = browserSync.reload;

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
  .pipe(gulp.dest(config.dist.root));

  // Put our index.php in the dist folder
  gulp.src('app/index.php')
  .pipe(gulp.dest(config.dist.root));

//   // Process any other view files from app/views

  return gulp.src(config.views.src)
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(gulpif(browserSync.active, reload({ stream: true, once: true })));

});
