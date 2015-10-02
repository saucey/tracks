
'use strict';

var filtersModule = require('./_index.js');

filtersModule.filter('trackLengthConverter', function() {

	function sformat( s ) {
		var fm = [
	        // Math.floor(Math.floor(Math.floor(s/60)/60)/24)%24,      //DAYS
	        Math.floor(Math.floor(s/60)/60)%60,                          //HOURS
	        Math.floor(s/60)%60,                                                //MINUTES
	        s%60                                                                      //SECONDS
        ];
        return $.map(fm,function(v,i) { return ( (v < 10) ? '0' : '' ) + v; }).join( ':' );
    }

	return function(input) {
		return sformat(input);
	};

});



