angular.module('loginApp', ['baseApp','ngRoute'])
	.config(function($routeProvider) {	 
	  $routeProvider
	    .when('/', {
	      controller:'LoginController',
	      templateUrl:'login.html'
	    })
	    .when('/loginUsuario', {
	      controller:'LoginController',
	      templateUrl:'login.html'
	    })
	    .otherwise({
	      templateUrl:'paginanaoexiste.html'
	    });
	})
;