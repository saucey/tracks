
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var editAlbumCtrl = function($state, $scope, $modal, $resource, apiService, GeneralModal) {

	// Get end points
	var API_ALBUMS = $state.current.data.API_ALBUMS;

	// List all the albums
	apiService.callAPI(API_ALBUMS).query(function success(response) {
		$scope.albums = response.albums;
		console.log($scope.albums);
	}, function error(response) {
		console.log(response, 'the response error!!!');
	});

	// Edit Album
	$scope.editThisAlbum = function(album){
		$scope.album = album;

		var modalInstance = $modal.open({
			templateUrl: 'modals/edit-album.html',
			controller: 'editAlbumModalCtl',
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

	$scope.confirmDelete = function(album){
		$scope.album = album;
		var modalInstance = $modal.open({
			templateUrl: 'modals/delete-album.html',
			controller: 'deleteAlbumModalCtl',
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
};

controllersModule.controller('editAlbumCtrl', editAlbumCtrl);


