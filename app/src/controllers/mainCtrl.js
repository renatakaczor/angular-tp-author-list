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
		if(($scope.addName) && ($scope.addTitle)){
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
		else{
			alert("Merci de renseigner au moins les champs Nom et Fonction.");
		}
	}
	$scope.hideUpdate = function(){
		this.updateForm = false;
		this.updateName = "";
		this.updateFirstName = "";
		this.updateTitle = "";
	}
	$scope.showUpdate = function(author){
		this.updateForm = true;
	}	
	$scope.submitUpdate = function(author){
		var name = this.updateName;
		var firstName = this.updateFirstName;
		var title = this.updateTitle;
		if((name == "") || (name == undefined)){
			name = this.author.nom;
		}
		if((firstName == "") || (firstName == undefined)){
			firstName = this.author.prenom;
		}
		if((title == "") || (title == undefined)){
			title = this.author.fonction;
		}
		$http.get('app/resources/serveur.php', 
		{
			params: {method: 'editAuteur', nom:name, prenom:firstName, fonction:title, id_auteur:this.author.id_auteur}
		}).then(function(result) {
			nom:this.updateName = "";
			this.updateFirstName = "";
			this.updateTitle = "";
			$scope.hideUpdate();
			$http.get('app/resources/serveur.php', 
			{
				params: {method: 'getAuteurs'}
			}).then(function(result) {
				$scope.authors = result.data;
			})
		})
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