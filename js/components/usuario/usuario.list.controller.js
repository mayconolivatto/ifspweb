angular.module('usuarioApp')
	.controller('ListUsuarioController', function($scope, $location, BaseService) {
		//Propriedades
		$scope.url="http://localhost:8080/confeccao/usuario";
		$scope.usuarioList=[];		

		//Declarações
		$scope.gotoPageCriar=gotoPageCriar;
		$scope.gotoPageEditar=gotoPageEditar;
		$scope.excluir=excluir;

		//Iniciar
		iniciar();

		//Métodos
		function iniciar(){
			obterUsuarioList();	
		}

		function excluir(id){
			BaseService.executarDelete($scope.url + "/" + id).then(
				function(response){
					alert("Exclusão realizada com sucesso");
					obterUsuarioList()
				});
		}

		function obterUsuarioList(){
			BaseService.executarGet($scope.url).then(
				function(usuarioList){
					$scope.usuarioList=usuarioList;
				});
		}

		function gotoPageCriar(){
			$location.path("/criarUsuario");
		}

		function gotoPageEditar(id) {
			$location.path("/editarUsuario/" + id);
		}
  	});