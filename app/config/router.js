app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "app/views/home.html",
		controller : "mainCtrl"
	}).when("/author/:author_id", {
		templateUrl : "app/views/author.html",
		controller : "authorCtrl"
	}).otherwise({
		redirectTo: "/"
	})
})