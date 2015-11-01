'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('ListCtrl', ['$scope', function ($scope) {
  	// Queries
	var Contest = Parse.Object.extend("contest");
	var query = new Parse.Query(Contest);
	query.find()
	.then(function(results){
        $scope.contests = results;
        console.log(results);
	});
  }]);
