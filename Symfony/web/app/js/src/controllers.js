app
	.controller('MainCtrl', function MainCtrl( $scope, $location ) {
		$scope.storage = storage;
		$scope.loaded = true;
		$scope.rootPath = 'app/'

		var menus = $scope.menus = storage.menus;
		var meta = $scope.meta = {};
		var location;

		$scope.$watch(function() { return $location.path();}, function(path) {
			var path = $location.path();
			if (path == '/' || path == '') path = '/accueil';

			location = $scope.location = {
				path: path,
				page: path.substr(1)
			}
			location.menu = menus.all[location.page];

			meta.title = menus.all[location.page].meta.title;
		});
	})

	.controller('AccueilCtrl', function AccueilCtrl( $scope, $location ) {
	})

	.controller('CvCtrl', function AccueilCtrl( $scope, $location ) {
		var cv = $scope.cv = storage.pages.cv; 
		var contact = $scope.contact = storage.contact; 

		$scope.download = function () {
			window.location = $scope.rootPath+'documents/CV_Alexis_Serres.pdf'
		}
	})

	.controller('ReferencesCtrl', function AccueilCtrl( $scope, $location, $timeout ) {
		var references = $scope.references = storage.pages.references;
		$scope.slides = {};
		
		angular.forEach(references.all, function(ref){
		 ref.loaded = false;
		});
		
		for ( var r=0; r<references.order.length; r++ ) {
			var ref = references.order[r];
			$scope.slides[ref] = 'default';

			display(ref, r);
		}
		
		function display(ref, r) {
			$timeout(function() { 
					references.all[ref].loaded = true; 
				}
				, 50 + r*200
			);
		}

		$scope.toggleSlide = function (reference) {
			$scope.slides[reference] = $scope.slides[reference]=='default' ? 'competences' : 'default'; 
		}
		$scope.getArrow = function (reference, hover) {
			var side = $scope.slides[reference]=='default' ? 'right' : 'left'; 
			var hover = hover ? '-hover' : '';

		  return $scope.rootPath+'/img/design/arrow-'+side+hover+'.png';
		}
	})

	.controller('CompetencesCtrl', function AccueilCtrl( $scope, $location, $timeout ) {
		var competences = $scope.competences = storage.pages.competences;
		
		$scope.levels = [];
		$timeout(function () {
			for (c in competences.all) {
				$scope.levels[c] = {};
				for (d in competences.all[c].data) { 
					$scope.levels[c][d] = competences.all[c].data[d];
				}
			}
		}, 100)
	})

	.controller('ContactCtrl', function AccueilCtrl( $scope, $http, $location ) {
		var contact = $scope.contact = {};
		var form = $scope.form = Form.create(storage.pages.contact.fields);
		console.log(form);

		$scope.checkout = function () {
			form.feedback.status = 'loading'

			var flag = form.checkout();

			if (flag) $scope.submit();
			else {
				form.feedback.status = 'valid-error'
				$scope.$watch(function() {return form.fields.all;}, function () {
					form.checkout();
				}, true)
			}
		}

		$scope.submit = function () {
			$http({
				method: 'GET', 
				url: '/app_dev.php/contact/',
				params: {
					subject: form.fields.all.subject.value,
					email: form.fields.all.email.value,
					name: form.fields.all.name.value,
					message: form.fields.all.message.value
				} 
			})
			  .success(function(data, status, headers, config) {
			    form.feedback.status = 'send-success'
			  })
			  .error(function(data, status, headers, config) {
			    form.feedback.status = 'send-error'
			  });
		}
	})
