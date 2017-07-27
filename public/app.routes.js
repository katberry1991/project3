(function(){

	'use strict';

	angular
		.module('app')
		.config(Routes);

	Routes.$inject = ['$stateProvider', '$urlRouterProvider'];


	function Routes($stateProvider, $urlRouterProvider){
		$stateProvider
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
							url: '/kioskcaseinfo',
							controller: 'KioskCaseInfoController as vm',
							templateUrl: 'views/kioskCaseInfo.html',
							authReq: false
						})
			.state('caseSummary', {
							url: '/casesummary',
							controller: 'CaseSummaryController as vm',
							templateUrl: 'views/caseSummary.html',
							authReq: false
						})
			.state('caseinfo', {
							url: '/caseinfo',
							controller: 'CaseInfoController as vm',
							templateUrl: 'controllers/CaseInfoController.html',
							authReq: false
						})

		$urlRouterProvider.otherwise('/');
	}
})();