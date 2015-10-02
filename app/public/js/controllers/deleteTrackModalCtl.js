
'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var deleteTrackModalCtl = function($scope, $modalInstance, apiService, $state, $timeout) {

	var API_DELETE_TRACK = $state.current.data.API_DELETE_TRACK;

	$scope.confirmDelete = function(obj){

		API_DELETE_TRACK = API_DELETE_TRACK+obj.album_id+'/tracks/'+obj.id;
			apiService.callAPI(API_DELETE_TRACK).remove(function success(response) {

				$('#js-track-'+obj.id) .children('td, th') .animate({ padding: 0 }) .wrapInner('<div />') .children() .slideUp(function() { $(this).closest('tr').remove(); });

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

controllersModule.controller('deleteTrackModalCtl', deleteTrackModalCtl);


