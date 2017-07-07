(function() {
  'use strict';

  angular.module("app")

    .component('navbar',{
      controller: function () {
        console.log('HEREnav');
        const vm = this;
      },
      templateUrl: './nav/nav.template.html'
    });

})();
