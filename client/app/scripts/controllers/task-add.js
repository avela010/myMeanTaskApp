'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TaskAddCtrl
 * @description
 * # TaskAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TaskAddCtrl', function ($scope, $location, Task, $log, $window) {

    var vm = this;

    vm.task = {};

    vm.saveTask = function(){
    	$log.debug('saving task: ' + JSON.stringify(vm.task));
    	Task.post(vm.task).then(function(){
    		$location.path('/tasks');
    	});
    };

    vm.back = function(){
        $log.debug('returning to previous page!');
        $window.history.go(-1);
    };

  });
