'use strict';

angular.module('tryagainApp')
  .controller('RequestCtrl', function ($scope, $stateParams,$http) {
    $scope.id = $stateParams.id;


    $http.get('/api/requests/'+$stateParams.id).then(response => {
      $scope.request = response.data;


    });
  });
