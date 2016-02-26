'use strict';

angular.module('tryagainApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requests', {
        url: '/requests',
        templateUrl: 'app/request/requests/requests.html',
        controller: 'RequestsCtrl'
      });
  });
