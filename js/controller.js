var app = angular.module('github-api');
app.controller('GitHubController', function($scope, githubService){
	// $scope.test = 'Hello World';
	// $scope.userName = 'dbagley23';
	$scope.getUserData = function (){
		githubService.getUser($scope.searchText).then(function(res){
			console.log(res.data);
			$scope.user = res.data;
		});
	}
});
