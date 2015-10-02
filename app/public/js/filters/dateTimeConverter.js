
'use strict';

var filtersModule = require('./_index.js');

filtersModule.filter('dateTimeConverter', function() {

	return function(input) {
		return moment(input).format('LLLL');
	};

});



