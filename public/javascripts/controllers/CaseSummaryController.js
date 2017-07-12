(function(){
	'use strict';

	angular
		.module('app')
		.controller('CaseSummaryController', CaseSummaryController);

	function CaseSummaryController(){
		var vm = this;
		vm.title = 'My App';
	}
})();