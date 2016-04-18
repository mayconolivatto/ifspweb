angular.module('usuarioApp', ['baseApp','ngRoute'])
	.config(function($routeProvider) {	 
	  $routeProvider
	    .when('/', {
	      controller:'UsuarioLoginController',
	      templateUrl:'login.html'
	    })
	    .when('/listarUsuario', {
	      controller:'ListUsuarioController',
	      templateUrl:'usuario.list.html'
	    })
	    .when('/criarUsuario', {
	      controller:'EditUsuarioController',
	      templateUrl:'usuario.edit.html'
	    })
	    .when('/editarUsuario/:id', {
	      controller:'EditContatoController',
	      templateUrl:'usuario.edit.html'
	    })	   
	    .when('/loginUsuario', {
	      controller:'UsuarioLoginController',
	      templateUrl:'login.html'
	    })
	    .when('/principal', {
	      controller:'UsuarioLoginController',
	      templateUrl:'principal.html'
	    })	    
	    .otherwise({
	      templateUrl:'paginanaoexiste.html'
	    });
	})
;