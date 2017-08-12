'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl',
        controllerAs: 'vm'
      })
      .when('/create/task', {
        templateUrl: 'views/task-add.html',
        controller: 'TaskAddCtrl',
        controllerAs: 'vm'
      })
      .when('/task/:id', {
        templateUrl: 'views/task-view.html',
        controller: 'TaskViewCtrl',
        controllerAs: 'vm'
      })
      .when('/task/:id/delete', {
        templateUrl: 'views/task-delete.html',
        controller: 'TaskDeleteCtrl',
        controllerAs: 'vm'
      })
      .when('/task/:id/edit', {
        templateUrl: 'views/task-edit.html',
        controller: 'TaskEditCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).factory('TaskRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      })
    });
  }).factory('Task', function(TaskRestangular) {
    return TaskRestangular.service('task');
  });;