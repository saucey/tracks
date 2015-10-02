'use strict';
var	angular = require('angular'),
	uiRouter = require('angular-ui-router'),
	angularBootstrap = require('angular-bootstrap-npm'),
	ngResource = require('angular-resource');
	require('./templates');
	require('./services/_index');
	require('./filters/_index');
	require('./controllers/_index');

var app = angular.module('app', [
	uiRouter,
	angularBootstrap,
	ngResource,
	'ncy-angular-breadcrumb',
	'templates',
	'ui.select',
	'app.controllers',
	'app.services',
	'app.filters'
]);

angular.module('app').config(require('./routes'));
angular.module('app').run(require('./run'));
angular.module('app').constant('AppSettings', require('./constants'));


