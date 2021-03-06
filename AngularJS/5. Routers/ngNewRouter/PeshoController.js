(function() {
    'use strict';

    angular
      .module('myapp')
      .controller('UsersController', Controller);

    Controller.$inject = [
      'UsersService'
    ];

    function Controller(UsersService) {
      var vm = this;
      vm.list = UsersService.get();
    }

})();