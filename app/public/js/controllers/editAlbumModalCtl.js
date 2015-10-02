
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var editAlbumModalCtl = function($scope, $modalInstance, apiService, $state, $timeout) {

	var API_EDIT_ALBUM = $state.current.data.API_EDIT_ALBUM;

	$scope.editAlbumSubmitted = function(obj, form){

		API_EDIT_ALBUM = API_EDIT_ALBUM+obj.id;

		apiService.callAPI(API_EDIT_ALBUM).update(obj ,function success(response) {

			$scope.success = "item successfully updated";

			$timeout(function(){
				$modalInstance.close(true);
			}, 3000);

		}, function error(response) {

			console.log(response, 'the error response !!!');
		});
	};

};

controllersModule.controller('editAlbumModalCtl', editAlbumModalCtl);


