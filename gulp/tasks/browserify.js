'use strict';

var gulp = require('gulp'),

    // debowerify = require('debowerify'),
    // ngAnnotate = require('browserify-ngannotate'),
    // concat = require('gulp-concat'),

    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    sourcemaps = require('gulp-sourcemaps'),
    buffer = require('vinyl-buffer'),
    streamify = require('gulp-streamify'),

    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    source = require('vinyl-source-stream'),

    bulkify = require('bulkify'),

    config = require('../../config'),
    handleErrors = require('../util/handleErrors');

function buildScript(file) {

  var bundler = browserify({
    entries: config.browserify.entries,
    debug: true,
    cache: false,
    packageCache: {},
    fullPaths: true
  }, watchify.args);

  if ( !global.isProd ) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      rebundle();
    });
  }

  var transforms = [
    bulkify
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform);
  });

  function rebundle() {

    var stream = bundler.bundle()
        .pipe(source(file))
        .pipe(gulp.dest('build/'));
        // .pipe(reload({stream:true}));

    var createSourcemap = global.isProd && config.browserify.sourcemap;

    gutil.log('Rebundle...');

    // return stream.on('error', handleErrors)
    //   .pipe(source(file))
    //   .pipe(gulpif(createSourcemap, buffer()))
    //   .pipe(gulpif(createSourcemap, sourcemaps.init()))
    //   .pipe(gulpif(global.isProd, streamify(uglify({
    //     compress: { drop_console: true }
    //   }))))
    //   .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
    //   .pipe(gulp.dest('app/build/'))
    //   .pipe(gulpif(browserSync.active, reload({ stream: true, once: true })));
  }

  return rebundle();
}

gulp.task('browserify', function() {

  return buildScript('app.js');

});