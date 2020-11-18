(function(){
    var app = angular.module("myApp",["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
        .when("/main",{
            templateUrl: "main.html",
            controller: "maincontroller"
        })
        .when("/user/:username",{
            templateUrl: "user.html",
            controller: "usercontroller"
        })
        .when("#/repo/:username/:reponame",{
            
            templateUrl:"repo.html",
            controller: "repocontroller"
        })
        .otherwise({redirectTo: "/main"});
    });
}());