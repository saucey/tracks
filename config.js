'use strict';

module.exports = {

	'serverport': 5000,

	'browserify': {
		'entries'   : ['app/public/js/app.js', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js', 'bower_components/ui-select/dist/select.js', 'bower_components/angular-breadcrumb/dist/angular-breadcrumb.min.js'],
		'bundleName': 'main.js',
		'sourcemap' : false,
		'debug': false
	},

	'dist': {
	  'root'  : 'build'
	},

	'views': {
	  'watch': [
	    'app/index.html',
	    'app/views/**/*.html'
	  ],
	  'src': 'app/views/**/*.html',
	  'dest': 'app/public/js'
	},

	'fonts': {
	  'src' : ['bower_components/font-awesome/fonts/**/*'],
	  'dest': 'build/public/fonts'
	},

	'images': {
	  'src' : ['app/public/images/**/*'],
	  'dest': 'build/public/images'
	},
};
