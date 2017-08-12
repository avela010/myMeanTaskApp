'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TasksCtrl', function ($scope, Task, $log) {
  	var vm = this;

  	activate();

  	function activate (){
  		vm.tasks = Task.getList().$object;
  		$log.debug('Loaded tasks: ' + vm.tasks);
  	};
  });
