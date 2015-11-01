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
  .config(function ($routeProvider) {    
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
  })
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
