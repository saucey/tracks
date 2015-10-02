
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var createAlbumCtrl = function($state, $scope, $modal, $resource, apiService, $timeout) {
	// Create blank object
	$scope.create_album = {};

	// Get end points
	var API_CREATE_ALBUM = $state.current.data.API_CREATE_ALBUM;

	// create new album submission
	$scope.createAlbumSubmit = function(obj, form) {

		apiService.callAPI(API_CREATE_ALBUM).create(obj, function success(response) {

			$scope.success = "Album successfully created";

			$timeout(function(){
				$scope.success = false;
			}, 3000);

		}, function error(response) {
			console.log(response, 'the error response !!!');
		});

	}
};

controllersModule.controller('createAlbumCtrl', createAlbumCtrl);


