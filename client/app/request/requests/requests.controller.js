'use strict';

class RequestsCtrl {
  constructor(Auth,$http, $state) {
    this.requests = [];

    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;

    $http.get('/api/requests').then(response => {
      this.requests = response.data;
    });
  }

}

angular.module('tryagainApp')
  .controller('RequestsCtrl', RequestsCtrl);
