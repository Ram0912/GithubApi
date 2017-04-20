var app = angular.module('myApp', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'profile.html',
		controller : 'githubViewer'
	})

	.when('/repos', {
		templateUrl : 'repos.html',
		controller : 'githubViewer'
	})

	.when('/star', {
		templateUrl : 'star.html',
		controller : 'githubViewer'
	})
		.when('/forked', {
		templateUrl : 'forked.html',
		controller : 'githubViewer'
	})

});