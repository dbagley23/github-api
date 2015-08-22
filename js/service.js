var app = angular.module('github-api');

app.service('githubService', function($http, $q){
  var id = "cc73f5fce5a6bd7e93a8";
  var sec = "3deda7bb88330c61b7fb3cdfa96724fb2c11fd4c";
  var param = "?client_id=" + id + "&client_secret=" + sec;
  
    this.getUser = function(username) {
    var deferred = $q.defer();
     $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username
    }).then(function(response){
      deferred.resolve(response);
    });
      return deferred.promise
  }


});


