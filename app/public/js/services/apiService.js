'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */

 var apiService = function($resource) {

 	return {

 		callAPI: function(URL_TO_API) {

 			return $resource(URL_TO_API, {},{
 				login: {
 					method: 'POST',
 					headers: {
 						// 'Content-Type'		: 'application/json'
 					},
 				},
 				query: {
 					method: 'GET',
 					headers: {
 						// 'Content-Type'		: 'application/x-www-form-urlencoded',
 						'api-username'		: 'leo',
	 					'api-token'			: '05ba923f1de0e092d31ef6218319c253',
 					},
 				},
 				create: { method: 'POST',
 				headers: {
 					// 'Content-Type'		: 'application/json',
 					'api-username'		: 'leo',
	 				'api-token'			: '05ba923f1de0e092d31ef6218319c253',
 				},
 			},
 			update: { method: 'PUT',
 			headers: {
 				// 'Content-Type'		: 'application/json',
 				'api-username'		: 'leo',
	 			'api-token'			: '05ba923f1de0e092d31ef6218319c253',
 			},
 		},
 		remove: { method: 'DELETE',
 		headers: {
 			// 'Content-Type'		: 'application/json',
 			'api-username'		: 'leo',
	 		'api-token'			: '05ba923f1de0e092d31ef6218319c253',
 		}
 	}
 })
}
}
};

servicesModule.service('apiService', apiService);
