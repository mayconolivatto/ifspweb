angular.module('contatoApp')
	.controller('ListContatoController', function($scope, $location, BaseService) {
		//Propriedades
		$scope.url="http://localhost:8080/agenda/contato";
		$scope.contatoList=[];		

		//Declarações
		$scope.gotoPageCriar=gotoPageCriar;
		$scope.gotoPageEditar=gotoPageEditar;
		$scope.excluir=excluir;

		//Iniciar
		iniciar();

		//Métodos
		function iniciar(){
			obterContatoList();	
		}

		function excluir(id){
			BaseService.executarDelete($scope.url + "/" + id).then(
				function(response){
					alert("Exclusão realizada com sucesso");
					obterContatoList()
				});
		}

		function obterContatoList(){
			BaseService.executarGet($scope.url).then(
				function(contatoList){
					$scope.contatoList=contatoList;
				});
		}

		function gotoPageCriar(){
			$location.path("/criarContato");
		}

		function gotoPageEditar(id) {
			$location.path("/editarContato/" + id);
		}
  	});