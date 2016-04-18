angular.module('contatoApp')	
	.controller('EditContatoController', function($scope, $routeParams, $location, BaseService) {
		$scope.url="http://localhost:8080/agenda/contato";
		$scope.contato={};	
		
		//Declarações
		$scope.salvar=salvar;
		$scope.goPageListar=goPageListar;

		//Iniciar
		if ($routeParams.id) {
			editar($routeParams.id);
		}

		//Métodos
		function salvar(){
			BaseService.executarPost($scope.url, $scope.contato).then(
				function(data){
					alert("Registro salvo com sucesso");
					goPageListar();
				});
		}

		function editar(id){
			BaseService.executarGet($scope.url + "?id=" + id).then(
				function(contato){
					$scope.contato=contato;
					
				});
		}

		function goPageListar(){
			$location.path("/listarContato");
		}
  	});