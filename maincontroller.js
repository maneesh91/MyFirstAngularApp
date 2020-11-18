(function(){
    var app = angular.module('myApp');

    app.controller('maincontroller', function($scope, $interval, $location){
      
    var decrementCountdown = function(){
        $scope.countDown -= 1;
        if($scope.countDown < 1){
            $scope.search($scope.username)
        }
    };
    
    var countDownInterval = null;
    var startCountDown = function(){
        countDownInterval = $interval(decrementCountdown, 1000, $scope.countDown)
    };
    
    $scope.search = function(username){
        if(countDownInterval){
             $interval.cancel(countDownInterval);
             $scope.countDown = null;
        }
      $location.path("/user/" + username);
    };
       
    $scope.username = "Angular";
    $scope.countDown = 5;
    startCountDown();
  
    } )
}());



