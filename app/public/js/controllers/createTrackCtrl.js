
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var createTrackCtrl = function($state, $scope, $modal, $resource, apiService, $timeout) {

	// Create blank object
	$scope.create_track = {};

	// Get end points
	var API_ALBUMS = $state.current.data.API_ALBUMS;
	var API_CREATE_TRACK = $state.current.data.API_CREATE_TRACK;

	// List all the albums
	apiService.callAPI(API_ALBUMS).query(function success(response) {

		console.log(response.albums, 'the albums');

		$scope.albums = response.albums;

	}, function error(response) {
		console.log(response, 'the response error!!!');
	});

	// create new track submission
	$scope.createTrackSubmit = function(obj, form) {

		API_CREATE_TRACK = API_CREATE_TRACK+obj.data.id+'/tracks';

		apiService.callAPI(API_CREATE_TRACK).create(obj,function success(response) {

			$scope.success = "Track successfully created";

			$timeout(function(){
				$scope.success = false;
			}, 3000);

		}, function error(response) {
			console.log(response, 'the response error!!!');
		});
	}
};

controllersModule.controller('createTrackCtrl', createTrackCtrl);


