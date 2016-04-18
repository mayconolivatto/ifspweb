angular.module('usuarioApp')	
	.controller('EditUsuarioController', function($scope, $routeParams, $location, BaseService) {
		$scope.url="http://localhost:8080/confeccao/usuario";
		$scope.usuario={};	
		
		//Declarações
		$scope.salvar=salvar;
		$scope.goPageListar=goPageListar;

		//Iniciar
		if ($routeParams.id) {
			editar($routeParams.id);
		}

		//Métodos
		function salvar(){
			BaseService.executarPost($scope.url, $scope.usuario).then(
				function(data){
					alert("Registro salvo com sucesso");
					goPageListar();
				});
		}

		function editar(id){
			BaseService.executarGet($scope.url + "?id=" + id).then(
				function(usuario){
					$scope.usuario=usuario;					
				});
		}

		function goPageListar(){
			$location.path("/listarUsuario");
		}
  	});