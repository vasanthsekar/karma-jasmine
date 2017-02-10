angular.module('app').service('searchService', function( $q, _ ) { // _ is lodash

  var cache = [
    {
      id: "current",
      name: "Current",
      description: "Search current data"
    },
    {
      id: "historical",
      name: "Historical",
      description: "Search historical data"
    }
  ];

  this.getSearchOptions = function() {
    var deferred = $q.defer();
    deferred.resolve( angular.copy( cache ) );
    return( deferred.promise );
  };

  this.getSearchOptionsByID = function( id ) {
    var deferred = $q.defer();
    var searchOption = _.findWithProperty( cache, "id", id );

    if ( searchOption ) {
      deferred.resolve( angular.copy( searchOption ) );
    } else {
      deferred.reject();
    }
    return( deferred.promise );
   };
  }
);