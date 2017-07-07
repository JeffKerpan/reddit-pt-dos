(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'posts',
        url: '/',
        component: 'post',
      })
      .state({
        name: 'edit',
        url: '/posts/:id/edit',
        component: 'edit',
      });
  }

}());
