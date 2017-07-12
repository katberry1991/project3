(function(){
	'use strict';

	angular
		.module('app')
		.controller('KioskCaseInfoController', KioskCaseInfoController);

	function KioskCaseInfoController(){
		var vm = this;
		vm.title = 'My App';
	}
})();