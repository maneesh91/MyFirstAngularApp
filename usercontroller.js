(function(){
    var app = angular.module('myApp');

    var usercontroller =  function($scope,github, $routeParams){
    
    var onpersonComplete = function(data){
        $scope.user = data;
        github.GetRepos($scope.user).then(onRepose, onError);
    };
    
    var onRepose = function(data){
        $scope.repos = data;
    };
    
    var onError = function(reason){
        $scope.error = "could not fetch person.";
    };
    
    
    
    $scope.username = $routeParams.username;
    $scope.reportsortorder= "-stargazers_count";
    github.GetUser($scope.username).then(onpersonComplete, onError);
};

    app.controller("usercontroller", usercontroller);

}());

