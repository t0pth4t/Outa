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
          this.$http.post('/api/requests',
            { name: this.request.name,
              description: this.request.description,
              imageUrl: this.request.imageUrl,
              active: true  })
            .then(() => {
              // Account created, redirect to home
              this.$state.go('requests');
            })
            .catch(err => {
              err = err.data;
              this.errors = {};

              // Update validity of form fields that match the mongoose errors
              angular.forEach(err.errors, (error, field) => {
                form[field].$setValidity('mongoose', false);
                this.errors[field] = error.message;
              });
            });
      }
    }
  }
}

angular.module('tryagainApp')
  .controller('NewRequestCtrl', NewRequestCtrl);
