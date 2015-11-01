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
