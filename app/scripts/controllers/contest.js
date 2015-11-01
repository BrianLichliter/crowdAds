'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('ContestCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {


  	// Queries
	var Contest = Parse.Object.extend("contest");
	var query = new Parse.Query(Contest);
	query.equalTo("hashtag", $routeParams.hashtag);
	query.first()
	.then(function(result){
        $scope.contest = result.attributes;
	});
  }]);
