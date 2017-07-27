(function(){
	'use strict';

	angular
		.module('app')
		.controller('KioskCaseInfoController', KioskCaseInfoController);

	KioskCaseInfoController.$inject = ['$http'];

	function KioskCaseInfoController($http){
		var vm = this;
		vm.title = 'My App';
		vm.cases = [];

		vm.getCases = function(){
			console.log('getCases being called');
			$http.get('/db/cases')
				.then(function(response){
					console.log(response);
					response.data.forEach(el => {
						vm.cases.push(el);
					});
					console.log(vm.cases);
					//vm.caseNumber = 
				})
		}

		vm.getCases();
	}
})();