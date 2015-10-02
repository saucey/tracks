
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var deleteAlbumModalCtl = function($scope, $modalInstance, apiService, $state, $timeout) {

	var API_DELETE_ALBUM = $state.current.data.API_DELETE_ALBUM;

	$scope.confirmDelete = function(obj){

		API_DELETE_ALBUM = API_DELETE_ALBUM+obj.id;

			apiService.callAPI(API_DELETE_ALBUM).remove(function success(response) {

				$('#js-album-'+obj.id) .children('td, th') .animate({ padding: 0 }) .wrapInner('<div />') .children() .slideUp(function() { $(this).closest('tr').remove(); });

				$scope.success = "item successfully deleted";

				$timeout(function(){
					$modalInstance.close(true);
				}, 3000);

			}, function error(response) {
		});
	};

	$scope.cancelDelete = function(){
		$modalInstance.close(true);
	};
};

controllersModule.controller('deleteAlbumModalCtl', deleteAlbumModalCtl);


