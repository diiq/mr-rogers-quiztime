angular.module("finalAssessment").config(["$routeProvider", function($routeProvider) {
  $routeProvider.when('/', {
    template: '<my-sample />',
  });
}]);
