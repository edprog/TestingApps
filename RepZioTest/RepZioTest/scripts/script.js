var repZioTest = angular.module('repZioTest', ['ngRoute', 'wu.masonry']);

repZioTest.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/products.html',
            controller: 'mainController'
        })
         .when('/products', {
                    templateUrl: 'pages/products.html',
                    controller: 'mainController'
         })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

repZioTest.controller('mainController', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('data/data.json').success(function (data) {

          if (($scope.products == null || $scope.products.length == 0) && data != null) {
              $scope.products = data;
              $scope.ManufacturerID = data.ManufacturerID;
          }
      });
  }]);
