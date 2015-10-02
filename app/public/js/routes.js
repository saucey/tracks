
'use strict';

/**
 * @ngInject
 */

var routesConfig = function($stateProvider, $urlRouterProvider, AppSettings, $locationProvider, $breadcrumbProvider) {

  	$breadcrumbProvider.setOptions({
  	  template:
  	    '<div class="breadcrumb">' +
  	      '<a ng-repeat="step in steps" class="btn btn-flat" ui-sref="{{step.name}}" ng-disabled="$last">{{step.ncyBreadcrumbLabel}}</a>' +
  	    '</div>'
  	});

	$stateProvider
	.state('home', {
		url: '',
		templateUrl: '',
		controller: 'rootCtrl as root',
		ncyBreadcrumb: {
			label: 'Home page',
		},
		views: {
			'header': {
				templateUrl: 'templates/header.html',
				// controller: 'HeaderCtrl as header'
			},
			'@': {
				templateUrl: 'home.html',
				controller: 'homeCtrl as home',
			},
			'footer': {
				templateUrl: 'templates/footer.html',
				// controller: 'FooterCtrl as footer'
			}
		},
		data: {
			API_CD: AppSettings.apiUrl,
			API_ALBUMS: AppSettings.apiUrl+'albums',
		}
	})
	.state('home.create-track', {
		ncyBreadcrumb: {
			parent: 'home', // Override the parent state (only for the breadcrumb).
			label: 'Create Track',
		},
		views: {
			'@': {
				templateUrl: 'pages/create-track.html',
				controller: 'createTrackCtrl as createTrack',
			},
		},
		data: {
			API_CREATE_TRACK: AppSettings.apiUrl+'albums/',
		}
	})
	.state('home.create-album', {
		ncyBreadcrumb: {
			parent: 'home', // Override the parent state (only for the breadcrumb).
			label: 'Create Album',
		},
		views: {
			'@': {
				templateUrl: 'pages/create-album.html',
				controller: 'createAlbumCtrl as createAlbum',
			},
		},
		data: {
			API_CREATE_ALBUM: AppSettings.apiUrl+'albums',
		}
	})
	.state('home.edit-track', {
		ncyBreadcrumb: {
			parent: 'home', // Override the parent state (only for the breadcrumb).
			label: 'Edit Track',
		},
		views: {
			'@': {
				templateUrl: 'pages/edit-track.html',
				controller: 'editTrackCtrl as editTrack',
			},
		},
		data: {
			API_EDIT_TRACK: AppSettings.apiUrl+'albums/',
			API_DELETE_TRACK: AppSettings.apiUrl+'albums/',
		}
	})
	.state('home.edit-track.single', {
		ncyBreadcrumb: {
			parent: 'home.edit-track', // Override the parent state (only for the breadcrumb).
			label: 'Album | {{album_title}} - {{track.title}}'
		},
		views: {
			'@': {
				templateUrl: 'pages/single-track.html',
				controller: 'singleTrackCtrl as singleTrack',
			},
		},
		params: {
			stuff: null,
		},
		data: {
			API_GET_ALBUM: AppSettings.apiUrl+'albums/',
		}
	})
	.state('home.edit-album', {
		ncyBreadcrumb: {
			parent: 'home', // Override the parent state (only for the breadcrumb).
			label: 'Edit Album'
		},
		views: {
			'@': {
				templateUrl: 'pages/edit-album.html',
				controller: 'editAlbumCtrl as editAlbum',
			},
		},
		data: {
			API_EDIT_ALBUM: AppSettings.apiUrl+'albums/',
			API_DELETE_ALBUM: AppSettings.apiUrl+'albums/',
		}
	})
	.state('home.list-all', {
		views: {
			'@': {
				templateUrl: 'pages/list-all.html',
				controller: 'listAllCtrl as listAll',
			},
		},
		data: {
			API_ALL_ALBUMS_TRACKS: AppSettings.apiUrl+'albums/',
		}
	})

	$urlRouterProvider.otherwise('/');
};

module.exports = routesConfig;


