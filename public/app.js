(function(){

	'use strict';

	angular
		.module('app', ['ui.router'])
		.config(Routes);

	Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
//		.controller('CaseController', CaseController);

	// function CaseController(){
	// 	var vm = this;
	// 	vm.title = 'Kathryn\'s app';
		
	// }

	function Routes($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'CaseController as vm',
				templateUrl: 'index.html',
				authReq: false
			});
		$urlRouterProvider.otherwise('/');
	}

})();