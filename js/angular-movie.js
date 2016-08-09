var movieApp = angular.module('movieApp', ['ngMaterial']);
movieApp.controller('movieCtrl', function($scope, $http, $mdDialog, $mdMedia){
	$scope.$watch('search', function(){
		var movieUrl = "http://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=" + $scope.search;
		$scope.imagePath = 'http://image.tmdb.org/t/p/w300';
		console.log($scope.search);	
		$scope.moreInfo = function(ev, movie){
			console.log(movie);
			$mdDialog.show(
				$mdDialog.alert()
				.parent(angular.element(document.querySelector('body')))
				.clickOutsideToClose(true)
				.title(movie.title)
				.textContent(movie.overview)
				.ariaLabel('Movie Info')
				.ok('Thanks!')
				.targetEvent(ev)
			);
		};

		$http({
			method: 'GET',
			url: movieUrl
		}).then(function success(movieData){
			$scope.movieArray = movieData.data.results;
			console.log(movieData);
		}, function failed(movieData){

		});	
	});
});
