'use strict';

angular.module('tryagainApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('request', {
        url: '/request/:id',
        templateUrl: 'app/request/request/request.html',
        controller: 'RequestCtrl'
      });
  });
