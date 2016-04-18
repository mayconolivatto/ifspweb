angular.module('loginApp')
	.controller('LoginController', function($scope, $location, BaseService) {
		//Propriedades
		$scope.url="http://localhost:8080/confeccao/login";
		
		$scope.login={};		

		//Declarações
		$scope.goPageListar=goPageListar;
		

		

		//Métodos
		

		function login(){
			BaseService.executarGetComModel($scope.url, $scope.login).then(
				function(data){
					alert("Registro salvo com sucesso");
					goPageListar();
				});
		}

		

	

		function goPageListar(){
			$location.path("/listarContato");
		}
  	});