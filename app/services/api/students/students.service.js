(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */

		var baseurl = 'http://il-resume-api.azurewebsites.net/api/students';
		this.getStudents = getStudents;
		/**
		 * Implementations
		 */

		function getStudents() {
			return $http.get(baseurl);
		}
	}
})();
