var app = angular.module('myApp', []);
app.controller('githubViewer', function($scope, github, $interval, $log,
		$anchorScroll, $location) {

	var onUsercomplete = function(data) {
		$scope.user = data;
		github.getRepos($scope.user).then(onRepos, onError);
		github.getStarred($scope.user).then(onStarred, onError);
	};

	var onRepos = function(data) {
		$scope.repos = data;
		$location.hash("userdetails");
		$anchorScroll();
	};
	var onStarred = function(data) {
		$scope.starred = data;
		$location.hash("userdetails");
		$anchorScroll();
	};

	var onError = function(reason) {
		$scope.error = "Sorry please check your username"
	};

	var decrementCountdown = function() {
		$scope.countdown -= 1;
		if ($scope.countdown < 1) {
			$scope.search($scope.username);
		}
	};

	
	var getFile = function(repoName){
		var repoName = document.getElementById("repoName").value;
		github.getValue(repoName).then(onFiles, onError);
	}
	
	var onFiles = function(data) {
		$scope.files = data;
		$anchorScroll();
	}

	var countdownInterval = null;
	var startCountdown = function() {
		countdownInterval = $interval(decrementCountdown, 1000,
				$scope.countdown);
	};

	$scope.search = function(username) {
		$log.info("Searching for " + username);
		github.getUser(username).then(onUsercomplete, onError);
		if (countdownInterval) {
			$interval.cancel(countdownInterval);
			$scope.countdown = null;
		}
	};

	/*
	 * $scope.getReadMe = function() {
	 * 
	 * var repoName = document.getElementById("repoName").value(); var userName =
	 * $scope.user.name; $scope.readMeUrl = $http.get('https://github.com/' +
	 * userName + '/' + repoName + '/blob/master/README.md'); }
	 */

	$scope.username = "Ram0912";
	$scope.message = "GitHub Viewer";
	$scope.repoSortOrder = "-stargazers_count";
	$scope.countdown = 10;
	startCountdown();
	/* $scope.readMeUrl = 'https://www.w3schools.com'; */

});