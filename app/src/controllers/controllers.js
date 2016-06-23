app.controller('mainCtrl', function($scope, $http){
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurs'}
	}).then(function(result) {
		$scope.authors = result.data;
	})
})

app.controller('authorCtrl', function($scope, $routeParams, $http) {
	console.log("author controller", $routeParams.author_id);
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurById', author_id:$routeParams.author_id}
	}).then(function(result) {
		console.log(result.data);
		$scope.auteur = result.data[0];
	})
})