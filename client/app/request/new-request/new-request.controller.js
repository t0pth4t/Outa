'use strict';

class NewRequestCtrl {
  constructor(Auth,$http, $state) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;
  }

  createNewRequest(form) {
    this.submitted = true;

    if (form.$valid) {
        if (this.request) {
          this.$http.post('/api/requests', { name: this.request.name, description: this.request.description, active: true  });
      }
    }
  }
}

angular.module('tryagainApp')
  .controller('NewRequestCtrl', NewRequestCtrl);
