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
				url: '/',
				controller: 'CaseController as vm',
				templateUrl: 'index.html',
				authReq: false
			})
		$urlRouterProvider.otherwise('/');
	}
.state('login', {
				url: '/',
				controller: 'CaseController as vm',
				templateUrl: 'index.html',
				authReq: false
			})
.state('kioskCaseInfo', {
				url: '/',
				controller: 'CaseController as vm',
				templateUrl: 'index.html',
				authReq: false
			})
.state('caseSummary', {
				url: '/',
				controller: 'CaseController as vm',
				templateUrl: 'index.html',
				authReq: false
			})
.state('caseinfo', {
				url: '/',
				controller: 'CaseController as vm',
				templateUrl: 'index.html',
				authReq: false
			})
})();