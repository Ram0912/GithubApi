var app = angular.module('myApp', ['ngRoute','ngSanitize']);
var mark = angular.module('markdownApp', ['ngSanitize']);
app.config([ '$routeProvider', function ( $routeProvider) {
    
  
	$routeProvider

	.when('/', {
		templateUrl : 'profile.html',
		controller : 'githubViewer'
	}).when('/demo', {
		templateUrl : 'repos.html',
		controller : 'githubViewer'
	}).when('/repos', {
		templateUrl : 'ownrepos.html',
		controller : 'githubViewer'
	})

	.when('/star', {
		templateUrl : 'star.html',
		controller : 'githubViewer'
	}).when('/forked', {
		templateUrl : 'forked.html',
		controller : 'githubViewer'
	}).when('/follower', {
		templateUrl : 'followers.html',
		controller : 'githubViewer'
	}).when('/following', {
		templateUrl : 'following.html',
		controller : 'githubViewer'
	})

	

}]);