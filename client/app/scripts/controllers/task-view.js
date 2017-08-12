'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TaskViewCtrl
 * @description
 * # TaskViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TaskViewCtrl', function($scope, $routeParams, Task, $log) {

    var vm = this;

    vm.viewTask = true;

    activate();

    function activate() {
      vm.task = Task.one($routeParams.id).get().$object;
    };

 });