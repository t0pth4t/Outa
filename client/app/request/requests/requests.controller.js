'use strict';

class RequestsCtrl {
  constructor(Auth,$http, $state) {


    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;
    this.requestsRows = [];

    $http.get('/api/requests').then(response => {
      var data = response.data;


      while(data.length >= 3){
        this.requestsRows.push(data.splice(0,3))
      }
      if(data.length > 0){
        this.requestsRows.push(data);
      }

    });
  }

}

angular.module('tryagainApp')
  .controller('RequestsCtrl', RequestsCtrl);
