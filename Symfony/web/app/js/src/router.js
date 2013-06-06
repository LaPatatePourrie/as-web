app.config(['$routeProvider', function($routeProvider) {
	var menus = storage.menus;


	// Path to partials templates
	var partialsPath = '';

	for (var i=0; i<menus.order.length; i++ ) {
		var partialPath = 'app/js/src/partials';
		var menu = menus.order[i];
		var ctrl = menu.charAt(0).toUpperCase() + menu.slice(1) + 'Ctrl';
		$routeProvider.when('/'+menu, {
				templateUrl: partialPath+'/page/'+menu+'.html',
				controller: ctrl
			}
		)
	}

	$routeProvider.otherwise({templateUrl: partialPath+'/page/accueil.html'});
}]);
