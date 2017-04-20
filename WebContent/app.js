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

	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'githubViewer'
	})

});