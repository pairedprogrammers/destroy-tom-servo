angular.module('destroytomservo').controller('CreateCtrl', ['$scope', '$http', function($scope, $http) {
    'use strict';
    
    $http.post('https://destroy-tom-servo-ducttape12.c9.io/newgame').success(function(result) {
        $scope.gameId = result;
    });
}]);