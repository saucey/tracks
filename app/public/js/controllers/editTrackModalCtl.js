
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var editTrackModalCtl = function($scope, $modalInstance, apiService, $state, $timeout) {

	var API_EDIT_TRACK = $state.current.data.API_EDIT_TRACK;

	$scope.editTrackSubmitted = function(obj, form){

		API_EDIT_TRACK = API_EDIT_TRACK+obj.album_id+'/tracks/'+obj.id;

		apiService.callAPI(API_EDIT_TRACK).update(obj ,function success(response) {

			$scope.success = "item successfully updated";

			$timeout(function(){
				$modalInstance.close(true);
			}, 3000);

		}, function error(response) {
			console.log(response, 'the error response !!!');
		});
	};
};

controllersModule.controller('editTrackModalCtl', editTrackModalCtl);


