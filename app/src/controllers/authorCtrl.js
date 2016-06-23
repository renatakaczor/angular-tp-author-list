app.controller('authorCtrl', function($scope, $routeParams, $http) {
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurById', id_auteur:$routeParams.author_id}
	}).then(function(result) {
		$scope.author = result.data[0];
	});
})