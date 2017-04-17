var app = angular.module('myApp',[]);
app.controller('githubViewer', function(
	$scope,github, $interval,$log,$anchorScroll,$location) {
	
	var onUsercomplete = function(data) {
		$scope.user = data;
		github.getRepos($scope.user).then(onRepos, onError);
	};

	var onRepos = function(data){
		$scope.repos = data;
		$location.hash("userdetails");
		$anchorScroll();
	};

	var onError = function(reason) {
		$scope.error = "Sorry please check your username"
	};

	var decrementCountdown = function(){
		$scope.countdown -=  1;
		if($scope.countdown < 1){
			$scope.search($scope.username);
		}
	};

	var countdownInterval = null;
	var startCountdown = function(){
		countdownInterval = $interval(decrementCountdown,1000, $scope.countdown);
	};

	$scope.search = function(username){
		$log.info("Searching for " + username);
		github.getUser(username).then(onUsercomplete, onError);
		if(countdownInterval){
			$interval.cancel(countdownInterval);
			$scope.countdown = null;
		}

	};

	$scope.username = "Ram0912";
	$scope.message = "GitHub Viewer";
	$scope.repoSortOrder = "-stargazers_count";
	$scope.countdown = 10 ;
	startCountdown();
});