angular.module('contatoApp', ['baseApp','ngRoute'])
	.config(function($routeProvider) {	 
	  $routeProvider
	    .when('/', {
	      controller:'ListContatoController',
	      templateUrl:'contato.list.html'
	    })
	    .when('/listarContato', {
	      controller:'ListContatoController',
	      templateUrl:'contato.list.html'
	    })
	    .when('/criarContato', {
	      controller:'EditContatoController',
	      templateUrl:'contato.edit.html'
	    })
	    .when('/editarContato/:id', {
	      controller:'EditContatoController',
	      templateUrl:'contato.edit.html'
	    })
	    .otherwise({
	      templateUrl:'paginanaoexiste.html'
	    });
	})
;