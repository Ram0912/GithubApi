(function() {
	var github = function($http) {

		var getUser = function(username) {
			return $http.get('https://api.github.com/users/' + username).then(
					function(response) {
						return response.data;
					});
		};
		var getRepos = function(user) {
			return $http.get(user.repos_url).then(function(response) {
				return response.data;
			});
		};
		var getStarred = function(user) {
			return $http.get(
					"https://api.github.com/users/" + user.login + "/starred")
					.then(function(response) {
						return response.data;
					})

		};
		var getValue = function(repoName, username) {
		
			return $http.get(
					"https://api.github.com/repos/" + username + "/" + repoName
							+ "/contents/README.md").then(function(response) {
				return response.data.content;
			})
		};
		return {
			getValue :getValue,
			getUser : getUser,
			getRepos : getRepos,
			getStarred : getStarred
		};
	};

	var module = angular.module("myApp");
	module.factory("github", github);
}());
