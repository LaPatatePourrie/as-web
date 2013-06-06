app.factory( 'storage', function($http) {
	return {
		get: function(query) {
			switch (query) {

				case 'menus':
					return menus;
				break;
				
			}
		}
	};
});