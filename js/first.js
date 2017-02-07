var app = angular.module('firstApp',[]);

app.controller('FirstController', function($scope) {
    // $scope.messageList = [];

    $scope.updateMessage = function() {
        // $scope.messageList.push(
        //     {
        //         header:$scope.first,
        //         message:$scope.last,
        //     });
        // $scope.first = "";
        // $scope.last = "";

        $scope.NAME = $scope.first + " " + $scope.last
    };
});