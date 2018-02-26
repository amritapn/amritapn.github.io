var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, $http){
	$scope.search1 = function(){
		console.log($scope.firstName);
		$http.get('https://api.github.com/search/users?q='+$scope.firstName)
		.then(function (response){
			$scope.jsondata = response.data.items;
			console.log("status:" + response.status);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
			 console.log("Task Finished.");
		});
	}
}); 