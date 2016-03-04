'use strict';

(function() {

class MainController {

  constructor(Auth, $http) {
    this.$http = $http;
    this.isLoggedIn = Auth.isLoggedIn;
    this.user = Auth.getCurrentUser;

  }

}

angular.module('tryagainApp')
  .controller('MainController', MainController);

})();
