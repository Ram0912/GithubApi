var app = angular.module('myApp', [ 'ngRoute' ]);
app.directive('markdown', function() {
    var converter = new Showdown.converter();
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            var htmlText = converter.makeHtml(element.text());
            element.html(htmlText);
        }
    }
});
app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'profile.html',
		controller : 'githubViewer'
	})
	.when('/demo', {
		templateUrl : 'repos.html',
		controller : 'githubViewer'
	})
	.when('/repos', {
		templateUrl : 'ownrepos.html',
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
	.when('/follower', {
		templateUrl : 'followers.html',
		controller : 'githubViewer'
	})
	.when('/following', {
		templateUrl : 'following.html',
		controller : 'githubViewer'
	})

});