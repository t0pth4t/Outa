'use strict';

angular.module('tryagainApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new-request', {
        url: '/new-request',
        templateUrl: 'app/request/new-request/new-request.html',
        authenticate: true
      });
  });
