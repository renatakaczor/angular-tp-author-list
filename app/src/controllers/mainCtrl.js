app.controller('mainCtrl', function($scope, $http){
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurs'}
	}).then(function(result) {
		$scope.authors = result.data;
	})
	$scope.hideAdd = function(){
		$scope.addForm = false;
		$scope.addName = "";
		$scope.addFirstName = "";
		$scope.addTitle = "";
	}
	$scope.showAdd = function(){
		$scope.addForm = true;
	}
	$scope.submitAdd = function(){
		$http.get('app/resources/serveur.php', 
		{
			params: {method: 'addAuteur', nom:$scope.addName, prenom:$scope.addFirstName, fonction:$scope.addTitle}
		}).then(function(result) {
			$scope.addName = "";
			$scope.addFirstName = "";
			$scope.addTitle = "";
			$scope.hideAdd();
			$http.get('app/resources/serveur.php', 
			{
				params: {method: 'getAuteurs'}
			}).then(function(result) {
				$scope.authors = result.data;
			})
		})
	}
	$scope.hideUpdate = function(){
		$scope.updateForm = false;
		$scope.updateName = "";
		$scope.updateFirstName = "";
		$scope.updateTitle = "";
	}
	$scope.showUpdate = function(author){
		$scope.updateForm = true;

	}
	$scope.delete = function(author){
		var delUser = author.id_auteur;
		$http.get('app/resources/serveur.php', 
		{
			params: {method: 'deleteAuteur', id_auteur:delUser}
		}).then(function(result) {
			$http.get('app/resources/serveur.php', 
			{
				params: {method: 'getAuteurs'}
			}).then(function(result) {
				$scope.authors = result.data;
			})
		})
	}
})