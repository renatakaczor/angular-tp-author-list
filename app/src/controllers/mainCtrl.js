app.controller('mainCtrl', function($scope, $http){
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurs'}
	}).then(function(result) {
		$scope.authors = result.data;
	})

	$scope.hide = function(){
		$scope.modifyForm = false;
		$scope.addName = "";
		$scope.addFirstName = "";
		$scope.addTitle = "";
	}
	$scope.show = function(){
		$scope.modifyForm = true;
	}
	$scope.submitAdd = function(){
		$http.get('app/resources/serveur.php', 
		{
			params: {method: 'addAuteur', nom:$scope.addName, prenom:$scope.addFirstName, fonction:$scope.addTitle}
		}).then(function(result) {
			$scope.addName = "";
			$scope.addFirstName = "";
			$scope.addTitle = "";
			$scope.hide();
			alert("Ajout effectué");
		})
	}
	$scope.delete = function(){
		console.log($scope);
		$http.get('app/resources/serveur.php', 
		{
			params: {method: 'deleteAuteur', id_auteur:$scope.id_auteur}
		}).then(function(result) {
			console.log(result.data);
		})
	}
})