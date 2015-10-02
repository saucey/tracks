
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var rootCtrl = function($state, $scope, $modal, $resource) {
	$scope.$state = $state;
};

controllersModule.controller('rootCtrl', rootCtrl);


