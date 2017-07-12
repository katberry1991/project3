(function(){
	'use strict';

	angular
		.module('app')
		.controller('CaseInfController', CaseInfoController);

	function CaseInfoController(){
		var vm = this;
		vm.title = 'My App';
	}
})();