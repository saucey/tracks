
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var editTrackCtrl = function($state, $scope, $modal, $resource, apiService, GeneralModal) {
	// return;
	// Create blank object
	$scope.create_track = {};

	// Get end points
	var API_ALBUMS = $state.current.data.API_ALBUMS;
	var API_EDIT_TRACK = $state.current.data.API_EDIT_TRACK;


	console.log(API_EDIT_TRACK, 'edit the tack');

	// List all the albums
	apiService.callAPI(API_ALBUMS).query(function success(response) {
		$scope.albums = response.albums;
		console.log($scope.albums);
	}, function error(response) {
		console.log(response, 'the response error!!!');
	});

	// edit track
	$scope.editThisTrack = function(track){
		$scope.track = track;

		var modalInstance = $modal.open({
			templateUrl: 'modals/edit-track.html',
			controller: 'editTrackModalCtl',
			size: 'sm',
			scope: $scope,
			keyboards: false,
 			// backadrop : 'static',
 			resolve: {
 				items: function () {
 					return 'this is the resolver';
 				}
 			}
 		}).result.then(function (returned) {
 			if (typeof(callbackSuccess) == 'function') {
 				console.log('callback success with returned', returned);
 				callbackSuccess(returned);
 			}
 			console.log('called close in the general modal !!!');
 		}, function (returned) {
 			console.log(returned ,'on the dissmiss');
 		});
	}

	$scope.confirmDelete = function(track){
		console.log('confrim delete in the track editor!!!');
		$scope.track = track;

		var modalInstance = $modal.open({
			templateUrl: 'modals/delete-track.html',
			controller: 'deleteTrackModalCtl',
			size: 'sm',
			scope: $scope,
			keyboards: false,
 			// backadrop : 'static',
 			resolve: {
 				items: function () {
 					return 'this is the resolver';
 				}
 			}
 		}).result.then(function (returned) {
 			if (typeof(callbackSuccess) == 'function') {
 				console.log('callback success with returned', returned);
 				callbackSuccess(returned);
 			}
 			console.log('called close in the general modal !!!');
 		}, function (returned) {
 			console.log(returned ,'on the dissmiss');
 		});
	}

	// $scope.viewThisTrack = function(track){
	// 	$state.go('home.edit-track.single', {foo: true, bar: 1});
	// 	// console.log(track, 'the single track selected!!!');
	// }
};

controllersModule.controller('editTrackCtrl', editTrackCtrl);


