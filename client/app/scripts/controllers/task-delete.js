'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TaskDeleteCtrl
 * @description
 * # TaskDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TaskDeleteCtrl', function ($routeParams, $location, Task) {
    
    var vm = this;

    vm.deleteTask = function(){
    	vm.task.remove().then(function(){
    		$location.path('/tasks');
    	});
    };

    vm.back = function(){
    	$location.path('/task/' + $routeParams.id)
    };
    
    activate();

    function activate(){
         vm.task = Task.one($routeParams.id).get().$object;
    };

  });
