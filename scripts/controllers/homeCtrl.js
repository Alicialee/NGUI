'use strict';


angular.module('NGUI')
	.controller('homeCtrl', function($scope) {
		$scope.personModel = {};

		$scope.tabs = [
			{active: true},
			{active: false},
			{active: false}
		];

		$scope.departFlag = {
			opened: false
		};
		$scope.returnFlag = {
			opened: false
		};

		$scope.personModel.departDate = new Date();
		$scope.today = new Date();

		$scope.next = function(index) {
			$scope.tabs[index].active = true;
		};		

		$scope.departOpen = function($event) {
		    $scope.departFlag.opened = true;
		};

		$scope.returnOpen = function($event) {
			$scope.returnFlag.opened = true;
		};

		$scope.clearReturnDate = function() {
			$scope.personModel.returnDate = null;
		};

	});