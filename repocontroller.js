(function(){
    var module = angular.module("myApp");
    
    var repocontroller = function($scope, $routeParams, github,$log){
       
        $log.info("IN");
        var onRepo = function(data){
            $scope.repo = data;
        }
        
        var onError = function(reseaon){
            $scope.error = reseaon;
        }
        
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;
        
        github.GetRepoDetails(username, reponame)
              .then(onRepo, onError);
    };
    
    module.controller("repocontroller", repocontroller)
}());