
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var singleTrackCtrl = function($state, $scope, $modal, $resource, apiService, $stateParams, $timeout) {

	$scope.track = $stateParams.stuff;

	var album_id = $scope.track.album_id;
	var API_GET_ALBUM = $state.current.data.API_GET_ALBUM;

	API_GET_ALBUM = API_GET_ALBUM+album_id;

	apiService.callAPI(API_GET_ALBUM).query(function success(response) {
		$scope.album_title = response.album.title;
	}, function error(response) {
		console.log(response, 'the response error!!!');
	});

 	$scope.counter = $scope.track.length;
 	var countOrin = $scope.counter;
 	var stopped;

	$scope.play = function() {
		stopped = $timeout(function() {
			if($scope.counter <= 0) return;
				$scope.counter--;
			$scope.play();
		}, 1000);
	};

	 $scope.$watch('counter', function(count) {
	 	if(count == 0){
	 		$timeout.cancel(stopped);
	 	}
	});

	$scope.stop = function(){
		$scope.counter = countOrin;
		$timeout.cancel(stopped);
	}

	$scope.pause = function(){
		$timeout.cancel(stopped);
	}
};

controllersModule.controller('singleTrackCtrl', singleTrackCtrl);


