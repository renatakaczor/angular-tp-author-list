app.controller('authorCtrl', function($scope, $routeParams, $http, $location) {
	$http.get('app/resources/serveur.php', 
		{
			params: {method: 'getAuteurById', id_auteur:$routeParams.author_id}
		}).then(function(result) {
			$scope.author = result.data[0];
		});
	$scope.hideUpdateAuthor = function(){
		$scope.updateAuthor = false;
		$scope.updateAuthorName = '';
		$scope.updateAuthorFirstName = '';
		$scope.updateAuthorTitle = '';
	}
	$scope.showUpdateAuthor = function(){
		$scope.updateAuthor = true;
	}
	$scope.submitUpdateAuthor = function(){
		var authorId = this.author.id_auteur;
		var nameAuthor = this.updateAuthorName;
		var firstNameAuthor = this.updateAuthorFirstName;
		var titleAuthor = this.updateAuthorTitle;
		if((nameAuthor == "") || (nameAuthor == undefined)){
			nameAuthor = this.author.nom;
		}
		if((firstNameAuthor == "") || (firstNameAuthor == undefined)){
			firstNameAuthor = this.author.prenom;
		}
		if((titleAuthor == "") || (titleAuthor == undefined)){
			titleAuthor = this.author.fonction;
		}
		$http.get('app/resources/serveur.php', 
			{
			params: {method: 'editAuteur', nom:nameAuthor, prenom:firstNameAuthor, fonction:titleAuthor, id_auteur:authorId}
		}).then(function(result) {
			$http.get('app/resources/serveur.php', 
				{
					params: {method: 'getAuteurById', id_auteur:authorId}
				}).then(function(result) {
					$scope.author = result.data[0];
				});
		})
		$scope.hideUpdateAuthor();
	}
	$scope.deleteAuthor = function(){
		var authorId = this.author.id_auteur;
		$http.get('app/resources/serveur.php', 
			{
				params: {method: 'deleteAuteur', id_auteur:authorId}
			}).then(function() {
				$location.url('/');
			})
	}
})