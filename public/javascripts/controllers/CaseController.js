(function(){
	'use strict';

	angular
		.module('app')
		.controller('CaseController', CaseController);

	function CaseController(){
		var vm = this;
		vm.title = 'My App';
	}
})();