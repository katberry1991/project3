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
			})
			.state('example', {
				url: '/example',
				controller: 'ExampleController as vm',
				templateUrl: 'views/example.html',
				authReq: false
			})
			.state('registration', {
				url: '/registration',
				controller: 'RegistrationController as vm',
				templateUrl: 'views/registration.html',
				authReq: false
			})
			.state('login', {
				url: '/login',
				controller: 'LoginController as vm',
				templateUrl: 'views/login.html',
				authReq: false
			})
			.state('kioskCaseInfo', {
							url: '/',
							controller: 'KioskCaseInfoController as vm',
							templateUrl: 'views/kioskCaseInfo.html',
							authReq: false
						})
			.state('caseSummary', {
							url: '/',
							controller: 'caseSummaryController as vm',
							templateUrl: 'views/caseSummary.html',
							authReq: false
						})
			.state('caseinfo', {
							url: '/',
							controller: 'CaseInfoController as vm',
							templateUrl: 'controllers/CaseInfoController.html',
							authReq: false
						})

		$urlRouterProvider.otherwise('/');
	}
})();