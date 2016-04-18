angular.module('usuarioApp')
	.controller('UsuarioLoginController', function($scope, $location, BaseService) {
		//Propriedades
		$scope.url="http://localhost:8080/confeccao/login";
		
		$scope.usuario={};		

		//Declarações
		$scope.goPageListar=goPageListar;
		$scope.loginUsuario=loginUsuario;
		

		

		//Métodos
		

		function loginUsuario(){
			BaseService.executarGet($scope.url + "?id=" + $scope.usuario.id + "&senha=" + $scope.usuario.senha).then(
				function(data){
					alert("Login efeturado");
					goPageListar();
				});
		}

			

		function goPageListar(){
			$location.path("/listarUsuario");
		}
  	});