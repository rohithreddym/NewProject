function HomeController($scope, $http) {
    $scope.CallInnerPage = function () {
        window.location.href = "Master.html#/Home/Left";
    }
}