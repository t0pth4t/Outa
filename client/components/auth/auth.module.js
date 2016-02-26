'use strict';

angular.module('tryagainApp.auth', [
  'tryagainApp.constants',
  'tryagainApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
