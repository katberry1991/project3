(function(){
	'use strict';

	angular
		.module('app')
		.controller('RegistrationController', RegistrationController);

	function RegistrationController(){
		var vm = this;
		vm.title = 'My App';
	}
})();