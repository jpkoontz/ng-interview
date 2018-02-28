(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['StudentsService', '$scope'];
	function StudentsController(StudentsService, $scope) {

		/**
		 * Model
		 */

		var vm = this;

		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */



		function getStudents() {
			StudentsService.getStudents()
			.then(function(response) {
				if (angular.isString(response.data)) {
					 getStudents();
				} else {
					$scope.students = response.data;
					angular.forEach($scope.students, function(value, key) {
						value.FullName = value.FirstName + ' ' + value.LastName;
					})
					return response;
				}
			}).catch(function(error) {
				getStudents();
			});
		}

		function activate() {
			// Initialization code goes here
			getStudents();
		}
	}
})();
