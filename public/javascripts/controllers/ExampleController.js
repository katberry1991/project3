(function(){
	'use strict';

	angular
		.module('app')
		.controller('ExampleController', ExampleController);

	function ExampleController(){
		var vm = this;
		vm.exampleBinding = 'exampleBinding';
		vm.exampleMethod = function(){
			console.log('I\'m a method!');
		}
	}

})();