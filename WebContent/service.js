angular.module('Services', [])
.factory('githubService', function($https){
	var runUserRequest = function (username){
		return $http({
			method: 'JSONP',
		url:'https://api.github.com/users/'+username+'events?callback=JSON_CALLBACK'
	})
};
return{
	event: function(username){
		return runUserRquest(username);
	}
}
});