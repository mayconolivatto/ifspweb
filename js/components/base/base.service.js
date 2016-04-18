angular.module('baseApp')
	.service('BaseService', function($http) {
		//Declarações
		this.executarGet=executarGet;
		this.executarPost=executarPost;
		this.executarDelete=executarDelete;
		this.executarGetComModel=executarGetComModel;

		//Métodos
		function executarGet(url){
			return $http.get(url)
				.then(function(response){
					return response.data;
			});
		}

		//Métodos
		function executarGetComModel(url,obj){
			return $http.get(url,obj)
				.then(function(response){
					return response.data;
			});
		}

		function executarPost(url, obj){
			return $http.post(url, obj)
				.then(function(response){
					return response.data;
			});
		}

		function executarDelete(url){
			return $http.delete(url)
				.then(function(response){
					return response;
			});
		}
	});