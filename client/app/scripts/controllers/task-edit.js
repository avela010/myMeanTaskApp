'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TaskEditCtrl
 * @description
 * # TaskEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TaskEditCtrl', function ($scope, $routeParams, Task, $location, $log) {
     
  	var vm = this;

  	vm.editTask = true;
  	vm.task = {};

  	Task.one($routeParams.id).get().then(function(task){
  		vm.task = task;
  		vm.saveTask = function(){
  			vm.task.save().then(function(){
  				$location.path('/task'+$routeParams.id);
  			});
  		};
  	});

  });
