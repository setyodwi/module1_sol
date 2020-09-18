(function () {
  "use strict";
  angular
    .module("LunchChecker", [])
    .controller("lunchCheckController", lunchCheckController);

  lunchCheckController.$inject = ["$scope"];
  function lunchCheckController($scope) {
    $scope.lunchCount = "";
    $scope.alert = "";
    $scope.check = false;

    $scope.lunchCheck = function name(params) {
      if ($scope.lunchCount.trim().length === 0) {
        $scope.noCount = true;
      } else {
        $scope.check = true;
        $scope.noCount = false;
        var arrayLunchCount = $scope.lunchCount.split(",");
        var arrayLunchCountNotNoCount = arrayLunchCount.filter(function (bagi) {
          return bagi.trim() !== "";
        });

        if (arrayLunchCountNotNoCount.length <= 3) {
          $scope.alert = "Enjoy bro!!";
        } else {
          $scope.alert = "Its Too much!";
        }
      }
    };
  }
})();
