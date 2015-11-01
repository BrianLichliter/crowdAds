'use strict';

/**
 * @ngdoc overview
 * @name developmentApp
 * @description
 * # developmentApp
 *
 * Main module of the application.
 */
angular
  .module('developmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'parse-angular'
  ])
  .config(["$routeProvider", function ($routeProvider) {    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/contest/:hashtag', {
        templateUrl: 'views/contest.html',
        controller: 'ContestCtrl',
        controllerAs: 'contest'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(function() {
    Parse.initialize("9kisedsagJDNuX2AuE0cdezNs0DC9CDXLngXiZ2c", "72KrEGsWByFeppLnURemqZHB91VO7LdFvVZzmWRL");
    $.material.init()
  })
  .filter('escape', function() {
    return window.encodeURIComponent;
  })
  .filter('no_hashtag', function() {
    return function(hashtag) {
      return hashtag.replace("#","");
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  }]);

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

angular.module('developmentApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/contest.html',
    "<div class=\"container\"> <div class=\"row\"> <div class=\"col-md-6\"> <h1>{{contest.hashtag}}</h1> </div> <div class=\"col-md-6\"> </div> </div> <div class=\"card\"> <div class=\"row\"> <div class=\"col-sm-6\"> Company: {{contest.company_name}} </div> <div class=\"col-sm-6 cardRight\"> Prize: {{contest.prize}} </div> </div> <div class=\"row\"> <div class=\"col-sm-6\"> {{contest.duration}} days left </div> <div class=\"col-sm-6 cardRight\"> <a ng-href=\"https://vine.co/search/{{contest.hashtag | no_hashtag}}\" target=\"_blank\"><button class=\"btn btn-primary btn-large\">View Submissions</button></a> </div> </div> </div> <div class=\"container\"> <h1>Description</h1> <p>{{contest.description}}</p> </div> </div>"
  );


  $templateCache.put('views/list.html',
    "<div class=\"container\"> <div class=\"row\"> <div class=\"col-md-6\"> <h1>Contests</h1> </div> <div class=\"col-md-6\"> </div> </div> <div class=\"card\" ng-repeat=\"contest in contests\"> <div class=\"row\"> <div class=\"col-sm-6\"> <a ng-href=\"#/contest/{{contest.attributes.hashtag | escape}}\"> {{contest.attributes.hashtag}} </a> </div> <div class=\"col-sm-6 cardRight\"> Prize: {{contest.attributes.prize}} </div> </div> <div class=\"row\"> <div class=\"col-sm-6\"> {{contest.attributes.duration}} days left </div> <div class=\"col-sm-6 cardRight\"> <a ng-href=\"https://vine.co/search/{{contest.attributes.hashtag | no_hashtag}}\" target=\"_blank\"><button class=\"btn btn-primary btn-large\">View Submissions</button></a> </div> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"sections\"> <div id=\"section1\"> <div id=\"section1header\"> <h1>crowdAds</h1> <a ng-href=\"#/list\"><button class=\"btn btn-primary btn-large\">View Contests</button></a> </div> </div> </div>"
  );

}]);
